const express = require("express");

const app = express();
const PORT = 3000;

const items = ["apple", "banana", "cherry", "dragonfruit", "elderberry"];

// DELETE /items/:id - remove item by index and return updated array
app.delete("/items/:id", (request, response) => {
  const id = parseInt(request.params.id);

  if (id < 0 || id >= items.length) {
    return response.status(404).json("Item not found.");
  }

  items.splice(id, 1);
  response.status(200).json(items);
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});