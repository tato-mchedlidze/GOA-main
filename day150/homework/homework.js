const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = 3000;

// hw2
let requestCount = 0;

app.use((req, res, next) => {
  requestCount++;
  console.log(`Total requests: ${requestCount}`);
  next();
});

// hw3
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Home page");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});