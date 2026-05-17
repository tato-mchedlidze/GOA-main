const readFile = require("../utils/readFile");
const writeFile = require("../utils/writeFile");

const DB = "./data/db.json";

async function getAllItems(request, response) {
  try {
    const items = await readFile(DB);
    response.status(200).json(items);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
}

async function getItemById(request, response) {
  try {
    const items = await readFile(DB);
    const item = items.find((item) => item.id === parseInt(request.params.id));

    if (!item) {
      return response.status(404).json({ error: "Item not found." });
    }

    response.status(200).json(item);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
}

async function createItem(request, response) {
  try {
    const { name, price } = request.body;

    if (!name || !price) {
      return response
        .status(400)
        .json({ error: "Name and price are required." });
    }

    const items = await readFile(DB);
    const newItem = { id: Date.now(), name, price };

    items.push(newItem);
    await writeFile(DB, items);

    response.status(201).json(newItem);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
}

async function updateItem(request, response) {
  try {
    const items = await readFile(DB);
    const item = items.find((item) => item.id === parseInt(request.params.id));

    if (!item) {
      return response.status(404).json({ error: "Item not found." });
    }

    if (request.body.name) item.name = request.body.name;
    if (request.body.price) item.price = request.body.price;

    await writeFile(DB, items);
    response.status(200).json(item);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
}

async function deleteItem(request, response) {
  try {
    const items = await readFile(DB);
    const index = items.findIndex(
      (item) => item.id === parseInt(request.params.id),
    );

    if (index === -1) {
      return response.status(404).json({ error: "Item not found." });
    }

    items.splice(index, 1);
    await writeFile(DB, items);

    response.status(200).json(items);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
