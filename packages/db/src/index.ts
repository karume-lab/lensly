import mongoose from "mongoose";
import * as schema from "./schema/index";

export { schema };

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lensly";

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("CRITICAL: MongoDB connection error:", error);
    throw error; // Re-throw to prevent exporting undefined dbInstance
  }
};

// Ensure connection is established before exporting
await connectDB();

export const client = mongoose.connection.getClient();
export const dbInstance = mongoose.connection.db;
export const db = mongoose.connection;
