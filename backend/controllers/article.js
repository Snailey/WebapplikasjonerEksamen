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
export const listPublic = catchAsyncErrors(async (req, res, next) => {
  const articles = await articleService.listArticles(req.query);
  res.status(200).json({ success: true, data: articles });
});

// PUT
// edit article by id
export const update = catchAsyncErrors(async (req, res, next) => {
  let article = await articleService.getArticleById(req.params.id);
  if (!article) {
    res.status(404).json("Finner ikke Artikkelen")
  }
  article = await articleService.updateArticle(req.params.id, req.body);
  res.status(200).json(article);
});

// DELETE
// delete article by id
export const remove = catchAsyncErrors(async (req, res, next) => {
  let article = await articleService.getArticleById(req.params.id);
  if (!article) {
    res.status(404).json("Finner ikke Artikkelen")
  }
  article = await articleService.removeArticle(req.params.id);
  res.status(204).json(article);
});
