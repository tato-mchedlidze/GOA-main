// day171 hw1

import cloudinary from "../config/cloudinary.js";
import fs from "fs";

const options = {
  use_filename: true,
  unique_filename: true,
  overwrite: false,
  resource_type: "image",
  quality: "auto",
  format: "webp",
  transformation: [{ width: 500, height: 500, crop: "fit", gravity: "center" }],
};

export const imageUpload = async (folder, files) => {
  const uploadedPromises = files.map(async (file) => {
    const result = await cloudinary.uploader.upload(file, { ...options, folder });
    fs.unlink(file, () => {}); // remove local temp file after upload
    return result;
  });

  return await Promise.all(uploadedPromises);
};

export const deleteImage = async (publicId) => {
  return await cloudinary.uploader.destroy(publicId);
};
