import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  title: { type: String, default: "" },
  url: { type: String, required: true },
  category: { type: String, default: "interior" },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Image", imageSchema);
