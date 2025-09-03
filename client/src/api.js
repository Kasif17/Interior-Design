import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "https://mohd-interior-design.onrender.com";

export const api = axios.create({
  baseURL: API_BASE + "/api",
  headers: { "Content-Type": "application/json" },
});
