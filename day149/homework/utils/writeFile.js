const fs = require("fs/promises");

async function writeFile(filePath, data) {
  try {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    throw new Error("Failed to write file: " + error.message);
  }
}

module.exports = writeFile;