// cw1
import { readFile } from "fs/promises";

async function readMyFile() {
  try {
    const data = await readFile("text.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log("error bro:", error);
  }
}

readMyFile();

// cw2
const fs = require("fs");

const stream = fs.createWriteStream("output.txt");

stream.write("Hallo\n");
stream.write("world\n");
stream.write("!!!!\n");

stream.end();

console.log("Text: output.txt");
