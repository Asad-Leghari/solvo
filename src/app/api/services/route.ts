import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import ServicesModel from "@/models/Services.model";
import { authenticateJWT } from "@/lib/authMiddleware";

export async function GET() {
  await dbConnect();
  try {
    const services = await ServicesModel.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: services });
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
    const { title, description, image } = await req.json();

    if (!title || !description || !image) {
      return NextResponse.json(
        { success: false, error: "All fields are required", data: null },
        { status: 400 }
      );
    }

    const service = await ServicesModel.create({ title, description, image });
    return NextResponse.json({ success: true, data: service }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message, data: null },
      { status: 500 }
    );
  }
}
