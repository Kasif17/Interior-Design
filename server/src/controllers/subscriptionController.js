import validator from "validator";
import Subscription from "../models/Subscription.js";

export async function subscribe(req, res) {
  try {
    const { email } = req.body || {};
    if (!email || !validator.isEmail(email + "")) {
      return res.status(400).json({ ok: false, message: "Valid email required" });
    }
    const doc = await Subscription.findOneAndUpdate(
      { email: validator.normalizeEmail(email) },
      { $setOnInsert: { email: validator.normalizeEmail(email) } },
      { new: true, upsert: true }
    );
    res.json({ ok: true, message: "You are subscribed!", data: { id: doc._id, email: doc.email } });
  } catch (err) {
    if (err.code === 11000) {
      return res.json({ ok: true, message: "Already subscribed" });
    }
    console.error(err);
    res.status(500).json({ ok: false, message: "Server error" });
  }
}
