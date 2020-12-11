import { categoryService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';

// POST
// create category
export const create = catchAsyncErrors(async (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json('Fyll ut kategorinavn');
  }
  const cat = await categoryService.createCategory(req.body);
  res.status(201).json({ success: true, data: cat });
});

// GET
// get all categories
export const list = catchAsyncErrors(async (req, res, next) => {
  const categories = await categoryService.listCategories();
  res.status(200).json({ success: true, data: categories });
});
