import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import ServicesModel from "@/models/Services.model";
import { authenticateJWT } from "@/lib/authMiddleware";
import cloudinary from "@/lib/cloudinary";
import { Buffer } from "node:buffer";

function isMultipart(req: Request) {
  return req.headers.get("content-type")?.includes("multipart/form-data");
}

async function uploadToCloudinary(file: File, folder = "solvo/services") {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const base64 = `data:${file.type};base64,${buffer.toString("base64")}`;
  const res = await cloudinary.uploader.upload(base64, { folder });
  return res.secure_url;
}

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  try {
    const service = await ServicesModel.findById(params.id);
    if (!service) {
      return NextResponse.json(
        { success: false, error: "Service not found", data: null },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: service });
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

    const service = await ServicesModel.findByIdAndUpdate(
      params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!service) {
      return NextResponse.json(
        { success: false, error: "Service not found", data: null },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: service });
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
    const deletedService = await ServicesModel.deleteOne({ _id: params.id });
    if (!deletedService.deletedCount) {
      return NextResponse.json(
        { success: false, error: "Service not found", data: null },
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
