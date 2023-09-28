import { connectMongoDb } from "@/app/libs/connectMongoDb";
import IdentityModel from "@/app/models/IdentityMODEL";
import { NextResponse } from "next/server";

export async function DELETE(_id) {
  await connectMongoDb();
  await IdentityModel.findByIdAndDelete(_id);
  return NextResponse.json({ message: "Identity Deleted" });
}
