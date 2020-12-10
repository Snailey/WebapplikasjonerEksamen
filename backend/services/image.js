import Image from '../models/image.js';

export const uploadImage = async (data) => {
  console.log(JSON.stringify(data));
  const image = new Image({
    path: data.path,
    file_mimetype: data.mimetype,
  });
  const savedImage = await image.save();
  return savedImage;
};

export const getImageById = async (id) => Image.findById(id);
