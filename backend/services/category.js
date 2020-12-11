import Category from '../models/category.js';

// POST
// create categroy
export const createCategory = async (data) => Category.create(data);

// GET
// get list of all categories
export const listCategories = async () => Category.find();
