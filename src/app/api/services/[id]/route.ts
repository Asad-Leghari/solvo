import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import ServicesModel from "@/models/Services.model";
import { authenticateJWT } from "@/lib/authMiddleware";

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
    const updateData = await req.json();
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
