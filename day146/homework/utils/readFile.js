const fs = require("fs");

function readFile(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(content);
}

module.exports = readFile;