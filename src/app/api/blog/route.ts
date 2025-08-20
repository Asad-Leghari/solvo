import { NextResponse } from "next/server";
import mongoose from "mongoose";
import dbConnect from "@/lib/dbConnect";
import BlogModel from "@/models/Blog.model";
import { authenticateJWT } from "@/lib/authMiddleware";
import cloudinary from "@/lib/cloudinary";
import { Buffer } from "node:buffer";

function isMultipart(req: Request) {
  return req.headers.get("content-type")?.includes("multipart/form-data");
}

async function uploadToCloudinary(file: File, folder = "solvo/blogs") {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const base64 = `data:${file.type};base64,${buffer.toString("base64")}`;
  const res = await cloudinary.uploader.upload(base64, { folder });
  return res.secure_url;
}

export async function GET(req: Request) {
  await dbConnect();
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const createdBy = searchParams.get("createdBy");

    const filter: Record<string, any> = {};
    if (category) filter.category = category;
    if (createdBy) filter.createdBy = createdBy;

    const blogs = await BlogModel.find(filter)
      .populate("createdBy", "username email")
      .sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: blogs });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message, data: null },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await authenticateJWT(req);
  } catch (err) {
    return err as NextResponse;
  }

  await dbConnect();
  try {
    let title = "";
    let description = "";
    let category = "";
    let createdBy = "";
    let imageUrl = "";

    if (isMultipart(req)) {
      const form = await req.formData();
      title = (form.get("title") as string)?.trim() || "";
      description = (form.get("description") as string)?.trim() || "";
      category = (form.get("category") as string)?.trim() || "";
      createdBy = (form.get("createdBy") as string)?.trim() || "";

      const file = form.get("file") as File | null;
      const imageField = (form.get("image") as string) || "";

      if (file) {
        imageUrl = await uploadToCloudinary(file);
      } else if (imageField) {
        imageUrl = imageField.trim();
      }
    } else {
      const body = await req.json();
      title = body.title?.trim() || "";
      description = body.description?.trim() || "";
      category = body.category?.trim() || "";
      createdBy = body.createdBy || "";
      imageUrl = body.image?.trim() || "";
    }

    if (!title || !description || !imageUrl || !category || !createdBy) {
      return NextResponse.json(
        { success: false, error: "All fields are required", data: null },
        { status: 400 }
      );
    }

    if (!mongoose.Types.ObjectId.isValid(createdBy)) {
      return NextResponse.json(
        { success: false, error: "Invalid user ID", data: null },
        { status: 400 }
      );
    }

    const blog = await BlogModel.create({
      title,
      description,
      image: imageUrl,
      category,
      createdBy,
    });
    const populatedBlog = await blog.populate("createdBy", "username email");

    return NextResponse.json(
      { success: true, data: populatedBlog },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message, data: null },
      { status: 500 }
    );
  }
}
