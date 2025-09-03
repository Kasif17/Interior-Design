import { Router } from "express";
import { subscribe } from "../controllers/subscriptionController.js";
import { listImages } from "../controllers/imageController.js";

const router = Router();

router.get("/health", (req, res) => res.json({ ok: true, message: "API up" }));
router.post("/subscribe", subscribe);
router.get("/images", listImages);

export default router;
