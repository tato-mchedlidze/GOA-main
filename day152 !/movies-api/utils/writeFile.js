// ─────────────────────────────────────────────
// utils/writeFile.js — Writes to the JSON database
// Converts JS objects to JSON and saves them
// ─────────────────────────────────────────────

const fs = require("fs");
const path = require("path");

// Same absolute path as readFile — both must point to the same file
const DB_PATH = path.join(__dirname, "../data/movies.json");

/**
 * Receives a JavaScript array, converts it to a formatted JSON string,
 * and writes it back to the database file.
 * Throws an error if the file can't be written.
 *
 * @param {Array} data - The updated array to save
 */
const writeFile = (data) => {
    try {
        // Convert JS array → JSON string with 2-space indentation (human-readable)
        const jsonString = JSON.stringify(data, null, 2);

        // Write the string to the file (overwrites previous content)
        fs.writeFileSync(DB_PATH, jsonString, "utf-8");
    } catch (error) {
        throw new Error(`Failed to write to database: ${error.message}`);
    }
};

module.exports = writeFile;
