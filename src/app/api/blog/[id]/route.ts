import { NextResponse } from "next/server";
import mongoose from "mongoose";
import dbConnect from "@/lib/dbConnect";
import BlogModel from "@/models/Blog.model";
import { authenticateJWT } from "@/lib/authMiddleware";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  try {
    const blog = await BlogModel.findById(params.id).populate(
      "createdBy",
      "username email"
    );
    if (!blog) {
      return NextResponse.json(
        { success: false, error: "Blog not found", data: null },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: blog });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message, data: null },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await authenticateJWT(req);
  } catch (err) {
    return err as NextResponse;
  }

  await dbConnect();
  try {
    const { createdBy, ...updateData } = await req.json();

    if (createdBy && !mongoose.Types.ObjectId.isValid(createdBy)) {
      return NextResponse.json(
        { success: false, error: "Invalid user ID", data: null },
        { status: 400 }
      );
    }

    if (createdBy) (updateData as any).createdBy = createdBy;

    const blog = await BlogModel.findByIdAndUpdate(params.id, updateData, {
      new: true,
      runValidators: true,
    }).populate("createdBy", "username email");

    if (!blog) {
      return NextResponse.json(
        { success: false, error: "Blog not found", data: null },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: blog });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message, data: null },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await authenticateJWT(req);
  } catch (err) {
    return err as NextResponse;
  }

  await dbConnect();
  try {
    const deletedBlog = await BlogModel.deleteOne({ _id: params.id });
    if (!deletedBlog.deletedCount) {
      return NextResponse.json(
        { success: false, error: "Blog not found", data: null },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: null });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message, data: null },
      { status: 500 }
    );
  }
}
