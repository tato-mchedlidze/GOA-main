const express = require("express");
const readFile = require("./utils/readFile");
const writeFile = require("./utils/writeFile");

const app = express();
const PORT = 3000;

app.use(express.json());

// GET /books - return all books, or filter by name using query
// example: /books?name=1984
app.get("/books", (request, response) => {
  const books = readFile("./books.json");
  const nameQuery = request.query.name;

  if (nameQuery) {
    const filtered = books.filter((book) =>
      book.name.toLowerCase().includes(nameQuery.toLowerCase()),
    );
    return response.status(200).json(filtered);
  }

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

// POST /books - add a new book
app.post("/books", (request, response) => {
  const books = readFile("./books.json");
  const newBook = request.body;

  const alreadyExists = books.find((book) => book.id === newBook.id);
  if (alreadyExists) {
    return response.status(400).json("A book with this id already exists.");
  }

  books.push(newBook);
  writeFile("./books.json", books);
  response.status(201).json(books);
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
