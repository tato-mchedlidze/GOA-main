const fs = require("fs/promises");

async function readFile(filePath) {
  try {
    const content = await fs.readFile(filePath, "utf-8");
    return JSON.parse(content);
  } catch (error) {
    throw new Error("Failed to read file: " + error.message);
  }
}

module.exports = readFile;