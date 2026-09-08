// day169 cw2
// day171 cw2

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
import upload from "../config/multer.js";

const phonesRouter = express.Router();

phonesRouter
  .route("/")
  .get(getAllPhones)

  .post(protect, allowedTo("admin"), upload.array("images"), addPhone);

  
phonesRouter
  .route("/:id")
  .get(getSinglePhone)

  .put(protect, allowedTo("admin"), upload.array("images"), editPhone)
  
  .delete(protect, allowedTo("admin"), deletePhone);

export default phonesRouter;
