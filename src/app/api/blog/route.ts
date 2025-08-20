import { NextResponse } from "next/server";
import mongoose from "mongoose";
import dbConnect from "@/lib/dbConnect";
import BlogModel from "@/models/Blog.model";
import { authenticateJWT } from "@/lib/authMiddleware";

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
    const { title, description, image, category, createdBy } = await req.json();

    if (
      !title?.trim() ||
      !description?.trim() ||
      !image?.trim() ||
      !category?.trim() ||
      !createdBy
    ) {
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
      image,
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
