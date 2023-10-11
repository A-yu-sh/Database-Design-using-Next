import { connectMongoDb } from "@/app/libs/connectMongoDb";
import IdentityModel from "@/app/models/IdentityMODEL";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDb();
  const data = await IdentityModel.aggregate([
    { $match: { task: "Next/Auth" } },
  ]);
  return NextResponse.json({ data });
}
