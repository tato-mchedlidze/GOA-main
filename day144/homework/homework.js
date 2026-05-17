const http = require("http");

const PORT = 3000;

let books = [
  { id: 1, name: "The Great Gatsby", price: 10.99 },
  { id: 2, name: "1984", price: 8.99 },
];

function getRequestBody(request) {
  return new Promise((resolve) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
    });
    request.on("end", () => {
      resolve(body);
    });
  });
}

const server = http.createServer(async (request, response) => {
  const method = request.method;
  const rawBody = await getRequestBody(request);
  const data = rawBody ? JSON.parse(rawBody) : {};

  response.setHeader("Content-Type", "application/json");

  // GET - return the full list of books
  if (method === "GET") {
    response.writeHead(200);
    response.end(JSON.stringify(books));

    // POST - add a new book
  } else if (method === "POST") {
    if (!rawBody) {
      response.writeHead(400);
      return response.end(JSON.stringify({ error: "Request body is empty." }));
    }

    const alreadyExists = books.find((book) => book.id === data.id);
    if (alreadyExists) {
      response.writeHead(400);
      return response.end(
        JSON.stringify({ error: "A book with this id already exists." }),
      );
    }

    books.push(data);
    response.writeHead(200);
    response.end(JSON.stringify(books));

    // PUT - update an existing book
  } else if (method === "PUT") {
    const book = books.find((book) => book.id === data.id);
    if (!book) {
      response.writeHead(404);
      return response.end(JSON.stringify({ error: "Book not found." }));
    }

    const nothingChanged = book.name === data.name && book.price === data.price;
    if (nothingChanged) {
      response.writeHead(400);
      return response.end(
        JSON.stringify({
          error: "No changes detected. Name and price are the same.",
        }),
      );
    }

    if (data.name) book.name = data.name;
    if (data.price) book.price = data.price;

    response.writeHead(200);
    response.end(JSON.stringify(books));

    // DELETE - remove a book by id
  } else if (method === "DELETE") {
    const index = books.findIndex((book) => book.id === data.id);
    if (index === -1) {
      response.writeHead(404);
      return response.end(JSON.stringify({ error: "Book not found." }));
    }

    books.splice(index, 1);
    response.writeHead(200);
    response.end(JSON.stringify(books));
  } else {
    response.writeHead(405);
    response.end(JSON.stringify({ error: "Method not supported." }));
  }
});

server.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
