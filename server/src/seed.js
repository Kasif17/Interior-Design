import dotenv from "dotenv";
import { connectDB } from "./db.js";
import Image from "./models/Image.js";

dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://developer786kasif:Zohaan1122@cluster0.8a1mrfl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const demo = [
  { title: "Living Room", url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200" },
  { title: "Bathroom", url: "https://images.unsplash.com/photo-1505693416364-c3a9f0dfb48e?w=1200" },
  { title: "Bedroom", url: "https://images.unsplash.com/photo-1505693416369-2f46cf3b8f81?w=1200" },
  { title: "Hallway", url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200" },
  { title: "Kitchen", url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1200" },
  { title: "Study", url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200" },
  { title: "Dining", url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200" },
  { title: "Sitting", url: "https://images.unsplash.com/photo-1444419988131-046ed4e5ffd6?w=1200" }
];

async function run() {
  await connectDB(MONGODB_URI);
  await Image.deleteMany({});
  await Image.insertMany(demo);
  console.log(`✔ Seeded ${demo.length} images`);
  process.exit(0);
}

run().catch(e => { console.error(e); process.exit(1); });
