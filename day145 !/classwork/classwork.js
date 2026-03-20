// cw 1
const http = require("http")

let arr = []

const server = http.createServer((req, res) => {
    if (req.method == "GET") {
        res.statusCode = 400
        res.end("arrye empty")
    }
})

server.listen(3000)

// cw 2
import fs from "fs/promises";

async function readFile() {
  const data = await fs.readFile("data.json", "utf8");
  console.log(data);
}

readFile();
