// ─────────────────────────────────────────────
// controllers/movieController.js
// Handles all CRUD logic for the movies resource
// Each function = one route action
// ─────────────────────────────────────────────

const readFile = require("../utils/readFile");
const writeFile = require("../utils/writeFile");

// ── GET /api/movies ──────────────────────────
// Returns all movies from the database
const getAllMovies = (req, res) => {
    try {
        const movies = readFile();
        res.status(200).json({
            count: movies.length,
            movies,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ── GET /api/movies/:id ──────────────────────
// Returns a single movie matched by its ID
const getMovieById = (req, res) => {
    try {
        const movies = readFile();
        const movie = movies.find((m) => m.id === req.params.id);

        if (!movie) {
            return res.status(404).json({ error: `Movie with ID "${req.params.id}" not found` });
        }

        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ── POST /api/movies ─────────────────────────
// Creates a new movie and adds it to the database
const createMovie = (req, res) => {
    try {
        const { title, genre, director, year, rating, description } = req.body;

        if (!title || !genre || !director || !year || !rating || !description) {
            return res.status(400).json({
                error: "All fields are required: title, genre, director, year, rating, description",
            });
        }

        if (typeof year !== "number" || year < 1888 || year > new Date().getFullYear() + 5) {
            return res.status(400).json({ error: "Year must be a valid number (e.g. 2010)" });
        }

        if (typeof rating !== "number" || rating < 0 || rating > 10) {
            return res.status(400).json({ error: "Rating must be a number between 0 and 10" });
        }

        const movies = readFile();

        const newMovie = {
            id: Date.now().toString(),
            title: title.trim(),
            genre: genre.trim(),
            director: director.trim(),
            year,
            rating,
            description: description.trim(),
            createdAt: new Date().toISOString(),
        };

        movies.push(newMovie);
        writeFile(movies);

        res.status(201).json(newMovie);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ── PUT /api/movies/:id ──────────────────────
// Updates an existing movie by ID
const updateMovie = (req, res) => {
    try {
        const movies = readFile();
        const index = movies.findIndex((m) => m.id === req.params.id);

        if (index === -1) {
            return res.status(404).json({ error: `Movie with ID "${req.params.id}" not found` });
        }

        const { title, genre, director, year, rating, description } = req.body;

        if (year !== undefined) {
            if (typeof year !== "number" || year < 1888 || year > new Date().getFullYear() + 5) {
                return res.status(400).json({ error: "Year must be a valid number (e.g. 2010)" });
            }
        }

        if (rating !== undefined) {
            if (typeof rating !== "number" || rating < 0 || rating > 10) {
                return res.status(400).json({ error: "Rating must be a number between 0 and 10" });
            }
        }

        const updatedMovie = {
            ...movies[index],
            ...(title && { title: title.trim() }),
            ...(genre && { genre: genre.trim() }),
            ...(director && { director: director.trim() }),
            ...(year !== undefined && { year }),
            ...(rating !== undefined && { rating }),
            ...(description && { description: description.trim() }),
        };

        movies[index] = updatedMovie;
        writeFile(movies);

        res.status(200).json(updatedMovie);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ── DELETE /api/movies/:id ───────────────────
// Removes a movie from the database by ID
const deleteMovie = (req, res) => {
    try {
        const movies = readFile();
        const index = movies.findIndex((m) => m.id === req.params.id);

        if (index === -1) {
            return res.status(404).json({ error: `Movie with ID "${req.params.id}" not found` });
        }

        const deletedMovie = movies[index];
        movies.splice(index, 1);
        writeFile(movies);

        res.status(200).json({
            message: `Movie "${deletedMovie.title}" deleted successfully`,
            deletedMovie,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie,
};
