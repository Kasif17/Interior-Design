import Image from "../models/Image.js";

export async function listImages(req, res) {
  try {
    const images = await Image.find().sort({ createdAt: -1 }).limit(24);
    res.json({ ok: true, data: images });
  } catch (e) {
    res.status(500).json({ ok: false, message: "Server error" });
  }
}
