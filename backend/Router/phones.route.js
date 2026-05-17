// day169 cw2

import express from "express";
import {
  getAllPhones,
  getSinglePhone,
  addPhone,
  editPhone,
  deletePhone,
} from "../Controllers/phones.controllers.js";
import { protect } from "../middlewares/auth.middleware.js";
import { allowedTo } from "../Controllers/roles.controller.js";

const phonesRouter = express.Router();

phonesRouter
  .route("/")
  .get(getAllPhones)
  .post(protect, allowedTo("admin"), addPhone);

phonesRouter
  .route("/:id")
  .get(getSinglePhone)
  .put(protect, allowedTo("admin"), editPhone)
  .delete(protect, allowedTo("admin"), deletePhone);

export default phonesRouter;
