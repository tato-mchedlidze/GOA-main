// ─────────────────────────────────────────────
// utils/readFile.js — Reads the JSON database
// Handles file reading and JSON parsing safely
// ─────────────────────────────────────────────

const fs = require("fs");
const path = require("path");

// Build an absolute path to the database file
// __dirname = folder this file lives in (utils/)
const DB_PATH = path.join(__dirname, "../data/movies.json");

/**
 * Reads the JSON file and returns parsed data as a JavaScript array.
 * Throws an error if the file can't be read or parsed.
 */
const readFile = () => {
    try {
        // Read the file contents as a UTF-8 string
        const rawData = fs.readFileSync(DB_PATH, "utf-8");

        // Parse the JSON string into a JavaScript array and return it
        return JSON.parse(rawData);
    } catch (error) {
        // Wrap any file/parse error with a clear message
        throw new Error(`Failed to read database: ${error.message}`);
    }
};

module.exports = readFile;
