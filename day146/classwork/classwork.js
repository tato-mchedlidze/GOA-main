const express = require("express");

// cw1
const app = express();
const PORT = 3000;

// cw2
const products = [
  "apple",
  "banana",
  "cherry",
  "dragonfruit",
  "elderberry",
  "fig",
  "grape",
  "honeydew",
  "kiwi",
  "lemon",
];

// GET /products - return the full list
app.get("/products", (request, response) => {
  response.status(200).json(products);
});

// GET /products/:id - return one item by index
app.get("/products/:id", (request, response) => {
  const id = parseInt(request.params.id);
  const product = products[id];

  if (product === undefined) {
    return response.status(404).json("Product not found.");
  }

  response.status(200).json(product);
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
