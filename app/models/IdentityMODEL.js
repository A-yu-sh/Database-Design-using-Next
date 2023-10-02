import mongoose from "mongoose";

const IdentitySchema = new mongoose.Schema({
  task: String,
  desc: String,
});

const IdentityModel =
  mongoose.models.Identity_Details ||
  mongoose.model("Identity_Details", IdentitySchema);

export default IdentityModel;
