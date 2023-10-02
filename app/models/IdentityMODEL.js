import mongoose from "mongoose";

const IdentitySchema = new mongoose.Schema({
  Name: String,
  Course: String,
  FatherName: String,
  MotherName: String,
  PhoneNo: Number,
});

const IdentityModel =
  mongoose.models.Identity_Details ||
  mongoose.model("Identity_Details", IdentitySchema);

export default IdentityModel;
