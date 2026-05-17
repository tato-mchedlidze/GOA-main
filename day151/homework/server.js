require("dotenv").config();
const express = require("express");
const errorhandler = require("errorhandler");

const app = express();
const PORT = process.env.PORT;

// hw2
app.get("/", (req, res) => {
  res.send(`Welcome to ${process.env.APP_NAME}`);
});

app.get("/error", (req, res) => {
  throw new Error("Something went wrong!");
});

if (process.env.NODE_ENV !== "production") {
  app.use(errorhandler());
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
