import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import api from "./routes/api.js";

dotenv.config();
const app = express();

app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

const origin = process.env.ALLOWED_ORIGIN || "*";
app.use(cors({ origin }));

app.use("/api", rateLimit({ windowMs: 60 * 1000, max: 100 }));
app.use("/api", api);

const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://developer786kasif:Zohaan1122@cluster0.8a1mrfl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

connectDB(MONGODB_URI).then(() => {
  app.listen(PORT, () => console.log(`🚀 API on http://localhost:${PORT}`));
}).catch(err => {
  console.error("MongoDB connection failed:", err);
  process.exit(1);
});
