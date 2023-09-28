import { connectMongoDb } from "@/app/libs/connectMongoDb";
import IdentityModel from "@/app/models/IdentityMODEL";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { Name, Course, FatherName, MotherName, PhoneNo } =
    await request.json();
  await connectMongoDb();
  await IdentityModel.create({ Name, Course, FatherName, MotherName, PhoneNo });
  return NextResponse.json({ message: "Identity Added" });
}
