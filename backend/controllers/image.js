import path from 'path';
import { imageService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';

export const create = catchAsyncErrors(async (req, res, next) => {
  if (!req.file) {
    return next(new ErrorHandler('Last opp en bildefil', 400));
  }
  console.log(`creater`);
  const image = await imageService.uploadImage(req.file);
  console.log(`create${JSON.stringify(image)}`);
  res.status(201).json({
    success: true,
    data: image,
  });
});

export const get = catchAsyncErrors(async (req, res, next) => {
  const image = await imageService.getImageById(req.params.id);
  if (!image) {
    return next(new ErrorHandler('Fant ikke bildefil', 404));
  }

  res.set({
    'Content-Type': image.file_mimetype,
  });
  const __dirname = path.resolve();
  console.log(__dirname);
  console.log(path.join(__dirname, image.path));
  res.sendFile(path.join(__dirname, image.path));
  //   const imagePath = image.file_path.replace('public/', '');

  //   res.status(200).json({
  //     success: true,
  //     data: { image, imagePath },
  //   });
});
