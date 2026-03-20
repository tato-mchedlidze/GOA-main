import fs from "fs/promises";
import { createReadStream, createWriteStream } from "fs";
import readline from "readline";
import process from "process";

// hw2
async function hw2_readTextFile() {
  try {
    const data = await fs.readFile("sample.txt", "utf-8");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

// hw2
async function hw2_readJsonFile() {
  try {
    const jsonData = await fs.readFile("data.json", "utf-8");
    const parsed = JSON.parse(jsonData);
    console.log(parsed.exampleProperty);
  } catch (err) {
    console.error(err);
  }
}

// hw3
function hw3_readableStream() {
  const rl = readline.createInterface({
    input: createReadStream("largefile.txt", "utf-8"),
  });
  rl.on("line", console.log);
}

// hw3
function hw3_writableStream() {
  const writeStream = createWriteStream("user_output.txt", { flags: "a" });
  process.stdin.on("data", (chunk) => writeStream.write(chunk));
  process.on("SIGINT", () => {
    writeStream.end();
    process.exit();
  });
}

// Execute tasks
(async function main() {
  await hw2_readTextFile();
  await hw2_readJsonFile();
  hw3_readableStream();
  hw3_writableStream();
})();
