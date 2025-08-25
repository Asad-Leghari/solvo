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

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  await dbConnect();
  const { id } = await params;
  try {
    const casestudy = await CasestudyModel.findById(id);
    if (!casestudy) {
      return NextResponse.json(
        { success: false, error: "casestudy not found", data: null },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: casestudy });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message, data: null },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await authenticateJWT(req);
  } catch (err) {
    return err as NextResponse;
  }

  await dbConnect();
  const { id } = await params;
  try {
    const updateData: Record<string, any> = {};

    if (isMultipart(req)) {
      const form = await req.formData();
      const title = (form.get("title") as string) ?? undefined;
      const description = (form.get("description") as string) ?? undefined;
      const imageField = (form.get("image") as string) ?? undefined;
      const file = form.get("file") as File | null;

      if (title !== undefined) updateData.title = title.trim();
      if (description !== undefined)
        updateData.description = description.trim();

      if (file) {
        updateData.image = await uploadToCloudinary(file);
      } else if (imageField) {
        updateData.image = imageField.trim();
      }
    } else {
      const body = await req.json();
      if (body.title !== undefined) updateData.title = body.title?.trim();
      if (body.description !== undefined)
        updateData.description = body.description?.trim();
      if (body.image !== undefined) updateData.image = body.image?.trim();
    }

    const casestudy = await CasestudyModel.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!casestudy) {
      return NextResponse.json(
        { success: false, error: "casestudy not found", data: null },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: casestudy });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message, data: null },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await authenticateJWT(req);
  } catch (err) {
    return err as NextResponse;
  }
  const { id } = await params;
  await dbConnect();
  try {
    const deletedcasestudy = await CasestudyModel.deleteOne({
      _id: id,
    });
    if (!deletedcasestudy.deletedCount) {
      return NextResponse.json(
        { success: false, error: "casestudy not found", data: null },
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
