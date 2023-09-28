import { connectMongoDb } from "@/app/libs/connectMongoDb";
import IdentityModel from "@/app/models/IdentityMODEL";
import { NextResponse } from "next/server";

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  console.log(id);
  await connectMongoDb();
  await IdentityModel.findByIdAndDelete(id);
  return NextResponse.json({ message: "Identity Deleted" });
}
