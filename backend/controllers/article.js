import { articleService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';

// POST
// create article
export const create = catchAsyncErrors(async (req, res, next) => {
  const article = await articleService.createArticle(req.body);
  res.status(201).json(article);
});

// GET
// get article by ID
export const findById = catchAsyncErrors(async (req, res, next) => {
  const article = await articleService.getArticleById(req.params.id);
  res.status(201).json({ success: true, data: article });
});

// get list of all articles
export const list = catchAsyncErrors(async (req, res, next) => {
  const articles = await articleService.listArticles(req.query);
  res.status(200).json({ success: true, data: articles });
});

// get list of all public articles

// PUT
// edit article by id

// DELETE
// delete article by id
