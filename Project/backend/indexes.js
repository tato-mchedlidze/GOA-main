// day162 cw1

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Phone = mongoose.model(
  "Phone",
  new mongoose.Schema({}, { strict: false }),
  "phones",
);

mongoose.connect(process.env.DB_CONNECTION).then(async () => {
  // compound index
  await Phone.collection.createIndex({ brand: 1, releaseYear: -1 });
  console.log("Compound index created");

  // compound multikey index (options is an array field)
  await Phone.collection.createIndex({ brand: 1, options: 1 });
  console.log("Compound multikey index created");

  // attempt: compound multikey with two array fields - this will fail
  try {
    await Phone.collection.createIndex({ options: 1, colors: 1 });
  } catch (err) {
    console.log("Expected error (two array fields):", err.message);
  }

  mongoose.disconnect();
});
