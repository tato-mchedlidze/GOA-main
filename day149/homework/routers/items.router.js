const express = require("express");
const {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/items.controller");

const itemsRouter = express.Router();

itemsRouter.get("/", getAllItems);
itemsRouter.get("/:id", getItemById);
itemsRouter.post("/", createItem);
itemsRouter.put("/:id", updateItem);
itemsRouter.delete("/:id", deleteItem);

module.exports = itemsRouter;
