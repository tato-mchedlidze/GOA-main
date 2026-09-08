// day163 hw2
// day164 hw2
// day164 cw1
// day165 3

import AppError from "../Utils/AppError.js";
import catchAsync from "../Utils/catchAsync.js";
import { deleteImage, imageUpload } from "../Utils/image.js";
import Phones from "../models/phones.model.js";

// day163 hw2 - get all phones
export const getAllPhones = catchAsync(async (req, res, next) => {
  const result = await Phones.find();

  if (result.length === 0) {
    return next(new AppError("No phones were found", 404));
  }

  res.status(200).json(result);
});

// day163 hw2 - get single phone
export const getSinglePhone = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const foundPhone = await Phones.findById(id);

  if (!foundPhone) {
    return next(new AppError(`Phone not found with id: ${id}`, 404));
  }

  return res.status(200).json(foundPhone);
});

// day163 hw2 - add phone
export const addPhone = catchAsync(async (req, res, next) => {
  const body = req.body;
  const images = req.files.map((file) => file.path);

  const result = await imageUpload("phones", images);
  const imageUrls = result.map((img) => ({
    url: img.secure_url,
    public_id: img.public_id,
  }));

  body.images = imageUrls;

  const newPhone = await Phones.create(body);

  return res.status(200).json(newPhone);
});

// day164 hw2 - edit phone
export const editPhone = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const updatedPhone = await Phones.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!updatedPhone) {
    return next(new AppError("Phone not found", 404));
  }

  res.status(200).json(updatedPhone);
});

// day164 cw - delete phone
// day164 hw2 - delete phone
export const deletePhone = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const deletedPhone = await Phones.findByIdAndDelete(id);

  if (deletedPhone === null) {
    return next(new AppError("Phone not found to delete!", 404));
  }

  const promises = deletedPhone.images.map((img) => deleteImage(img.public_id));
  await Promise.all(promises);

  return res.status(204).json();
});
