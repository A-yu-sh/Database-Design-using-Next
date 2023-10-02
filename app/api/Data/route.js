import { connectMongoDb } from "@/app/libs/connectMongoDb";
import IdentityModel from "@/app/models/IdentityMODEL";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { task, desc } = await request.json();
  await connectMongoDb();
  await IdentityModel.create({ task, desc });
  return NextResponse.json({ message: "Data Added" });
}

export async function GET() {
  await connectMongoDb();
  const data = await IdentityModel.find();
  return NextResponse.json({ data });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDb();
  await IdentityModel.findByIdAndDelete(id);
  return NextResponse.json({ message: "Data Deleted" });
}
