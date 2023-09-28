import mongoose from "mongoose";

export async function connectMongoDb() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  } else {
    return await mongoose.connect(process.env.MONGO_DB_URI);
  }
}
