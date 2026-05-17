const express = require("express");
const readFile = require("./utils/readFile");

const app = express();
const PORT = 3000;

// GET /books - return all books
app.get("/books", (request, response) => {
  const books = readFile("./books.json");
  response.status(200).json(books);
});

// GET /books/:id - return a single book by id
app.get("/books/:id", (request, response) => {
  const books = readFile("./books.json");
  const book = books.find((book) => book.id === parseInt(request.params.id));

  if (!book) {
    return response.status(404).json("Book not found.");
  }

  response.status(200).json(book);
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
