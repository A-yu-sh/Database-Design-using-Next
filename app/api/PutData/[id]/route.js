import { connectMongoDb } from "@/app/libs/connectMongoDb";
import IdentityModel from "@/app/models/IdentityMODEL";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newCourse: Course } = request.json();
  await connectMongoDb();
  await IdentityModel.findByIdAndUpdate(id, { Course });
  return NextResponse.json({ message: "Updated" });
}
