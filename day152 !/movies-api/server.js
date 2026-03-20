// ─────────────────────────────────────────────
// server.js — Entry point for the Movies API
// Sets up Express, middleware, and routes
// ─────────────────────────────────────────────

const express = require("express");
const movieRoutes = require("./routes/movieRoutes");

const app = express();

// ── Middleware ──────────────────────────────
// Parses incoming JSON request bodies
app.use(express.json());

// Parses URL-encoded form data (e.g. from HTML forms)
app.use(express.urlencoded({ extended: true }));

// ── Routes ──────────────────────────────────
// All movie-related endpoints live under /api/movies
app.use("/api/movies", movieRoutes);

// ── Root health check ───────────────────────
// Quick way to verify the server is running
app.get("/", (req, res) => {
    res.json({ message: "🎬 Movies API is running!" });
});

// ── 404 Handler ─────────────────────────────
// Catches any request that doesn't match a defined route
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

// ── Global Error Handler ─────────────────────
// Catches unexpected errors thrown anywhere in the app
app.use((err, req, res, next) => {
    console.error("Unhandled error:", err.message);
    res.status(500).json({ error: "Internal server error" });
});

// ── Start Server ─────────────────────────────
// Locked to port 3000 only
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🎬 Movies API running on http://localhost:${PORT}`);
});