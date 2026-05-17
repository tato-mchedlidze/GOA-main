// ─────────────────────────────────────────────
// routes/movieRoutes.js
// Maps HTTP methods + paths to controller functions
// Base path: /api/movies (set in server.js)
// ─────────────────────────────────────────────

const express = require("express");
const router = express.Router();

const {
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie,
} = require("../controllers/movieController");

// GET    /api/movies → fetch all movies
// POST   /api/movies → create a new movie
router.route("/").get(getAllMovies).post(createMovie);

// GET    /api/movies/:id → fetch a single movie by ID
// PUT    /api/movies/:id → update a movie by ID
// DELETE /api/movies/:id → delete a movie by ID
router.route("/:id").get(getMovieById).put(updateMovie).delete(deleteMovie);

module.exports = router;
