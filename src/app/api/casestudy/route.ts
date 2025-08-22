import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import CasestudyModel from "@/models/Casestudy.model";
import { authenticateJWT } from "@/lib/authMiddleware";
import cloudinary from "@/lib/cloudinary";
import { Buffer } from "node:buffer";

function isMultipart(req: Request) {
  return req.headers.get("content-type")?.includes("multipart/form-data");
}

async function uploadToCloudinary(file: File, folder = "solvo/casestudy") {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const base64 = `data:${file.type};base64,${buffer.toString("base64")}`;
  const res = await cloudinary.uploader.upload(base64, { folder });
  return res.secure_url;
}

export async function GET() {
  await dbConnect();
  try {
    const casestudy = await CasestudyModel.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: casestudy });
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
    let imageUrl = "";

    if (isMultipart(req)) {
      const form = await req.formData();
      title = (form.get("title") as string)?.trim() || "";
      description = (form.get("description") as string)?.trim() || "";

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
      imageUrl = body.image?.trim() || "";
    }

    if (!title || !description || !imageUrl) {
      return NextResponse.json(
        { success: false, error: "All fields are required", data: null },
        { status: 400 }
      );
    }

    const casestudy = await CasestudyModel.create({
      title,
      description,
      image: imageUrl,
    });

    return NextResponse.json(
      { success: true, data: casestudy },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message, data: null },
      { status: 500 }
    );
  }
}
