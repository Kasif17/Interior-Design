import mongoose from "mongoose";

export const connectDB = async (MONGODB_URI) => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ MongoDB Atlas connected successfully!");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
};



// import mongoose from "mongoose";

// export async function connectDB(uri) {
//   mongoose.set("strictQuery", true);
//   await mongoose.connect(uri, { dbName: uri.split('/').pop() });
//   console.log("✅ MongoDB connected");
// }
