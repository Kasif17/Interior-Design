
# Mohammad Interior Design — React + Node.js + MongoDB (Full Stack)

This project replicates the UI from your screenshots ("Morph Design") using **React (Vite)** on the frontend and **Node.js/Express + MongoDB** on the backend. It includes:
- Hero (Home), About, Portfolio grid, Clients, Contact/Newsletter
- Floating "Let's Chat!" widget (front-end only)
- Newsletter subscribe API (`POST /api/subscribe`)
- Portfolio images API (`GET /api/images`) with a seed script

## Prerequisites
- Node.js 18+ and npm
- A MongoDB connection string (local or Atlas)

## 1) Backend setup
```bash
cd server
cp .env.example .env           # then edit .env
npm install
npm run seed                   # (optional) seed demo images
npm run dev                    # starts on http://localhost:4000
```

## 2) Frontend setup
```bash
cd ../client
npm install
npm run dev                    # starts Vite dev server (default 5173)
```

The frontend reads `VITE_API_BASE` from `.env` (Vite). If not set, it defaults to `http://localhost:4000`.

## Scripts
- **server**: `npm run dev` (watch mode), `npm start` (prod), `npm run seed` (insert demo images)
- **client**: `npm run dev`, `npm run build`, `npm run preview`

---

**Note:** Replace images in `client/public/assets/` with your own to match the design exactly.
