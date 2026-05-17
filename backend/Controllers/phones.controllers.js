import AppError from "../Utils/AppError.js";
import catchAsync from "../Utils/catchAsync.js";
import ReadFile from "../Utils/ReadFile.js";
import WriteFile from "../Utils/WriteFile.js";

// day163 hw2 - get all phones
export const getAllPhones = catchAsync(async (req, res, next) => {
  const result = await ReadFile(process.env.PHONES_DB);

  if (!result.length) {
    return next(new AppError("No phones were found", 404));
  }

  res.status(200).json(result);
});

// day163 hw2 - get single phone
export const getSinglePhone = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const allPhones = await ReadFile(process.env.PHONES_DB);
  const found = allPhones.find((item) => item.id === id);

  if (!found) {
    return next(new AppError(`Phone not found with id: ${id}`, 404));
  }

  res.status(200).json(found);
});

// day163 hw2 - add phone
export const addPhone = catchAsync(async (req, res, next) => {
  const allPhones = await ReadFile(process.env.PHONES_DB);
  const {
    productName,
    brand,
    model,
    releaseYear,
    price,
    currency,
    specs,
    options,
  } = req.body;

  if (
    [
      productName,
      brand,
      model,
      releaseYear,
      price,
      currency,
      specs,
      options,
    ].some((v) => v === undefined)
  ) {
    return next(new AppError("Not enough data to create new phone", 400));
  }

  if (typeof releaseYear !== "number" || typeof price !== "number") {
    return next(new AppError("Invalid format for price or release year", 400));
  }

  if (!options || options.length === 0) {
    return next(new AppError("Invalid format for options", 400));
  }

  const validKeys = [
    "display",
    "processor",
    "ram",
    "storage",
    "camera",
    "battery",
  ];
  const specKeys = Object.keys(specs);

  if (
    !specKeys.every((k) => validKeys.includes(k)) ||
    !validKeys.every((k) => specKeys.includes(k))
  ) {
    return next(new AppError("Invalid properties in specs object", 406));
  }

  const newPhone = {
    id: allPhones.length + 1,
    productName,
    brand,
    model,
    releaseYear,
    price,
    currency,
    specs,
    options,
    inStock: true,
    rating: 0,
    createdAt: Date(),
  };

  allPhones.push(newPhone);
  await WriteFile(process.env.PHONES_DB, allPhones);

  res.status(200).json(newPhone);
});

// day164 hw2 - edit phone
export const editPhone = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const updates = req.body;

  const allPhones = await ReadFile(process.env.PHONES_DB);
  const phone = allPhones.find((item) => item.id === id);

  if (!phone) {
    return next(new AppError(`Phone not found with id: ${id}`, 404));
  }

  const schema = {
    productName: "string",
    brand: "string",
    model: "string",
    releaseYear: "number",
    price: "number",
    currency: "string",
    inStock: "boolean",
    rating: "number",
    createdAt: "string",
  };

  let updated = false;

  for (const key in schema) {
    if (key in updates && typeof updates[key] === schema[key]) {
      phone[key] = updates[key];
      updated = true;
    }
  }

  if (updates.specs && typeof updates.specs === "object") {
    const specSchema = {
      display: "string",
      processor: "string",
      ram: "number",
      storage: "number",
      camera: "number",
      battery: "number",
    };
    for (const key in specSchema) {
      if (
        key in updates.specs &&
        typeof updates.specs[key] === specSchema[key]
      ) {
        phone.specs[key] = updates.specs[key];
        updated = true;
      }
    }
  }

  if (Array.isArray(updates.options) && updates.options.length > 0) {
    phone.options = updates.options;
    updated = true;
  }

  if (!updated) {
    return next(new AppError("There is no new data to update phone", 400));
  }

  await WriteFile(process.env.PHONES_DB, allPhones);
  res.status(200).json(phone);
});

// day164 cw1 - delete phone
// day164 hw2 - delete phone
export const deletePhone = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  let allPhones = await ReadFile(process.env.PHONES_DB);
  const found = allPhones.find((item) => item.id === id);

  if (!found) {
    return next(new AppError(`Phone not found with id: ${id}`, 404));
  }

  allPhones = allPhones.filter((item) => item.id !== id);
  await WriteFile(process.env.PHONES_DB, allPhones);

  res.status(204).json();
});
