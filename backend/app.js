// day162 cw2
// day162 hw2

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser"; // added - day169 hw1
import phonesRouter from "./Router/phones.route.js";
import authRouter from "./Router/auth.route.js";
import globalErrorHandler from "./Controllers/error.controller.js";

const app = express();

dotenv.config();

app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser()); // added - day169 hw1

app.use("/api/status", (req, res, next) => {
  res.status(200).send("Server is running");
  next();
});

app.use("/api/phones", phonesRouter);
app.use("/api/auth", authRouter);

app.use(globalErrorHandler);

mongoose.connect(process.env.DB_CONNECTION).then(() => {
  console.log("Connected to database");
  app.listen(process.env.PORT, () =>
    console.log(`Server is running on port ${process.env.PORT}`),
  );
});
