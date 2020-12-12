import Article from '../models/article.js';
import { Filter } from '../utils/filter.js';

// Test med filter
export const listArticlesFilter = async (queryString) => {
  const { limit, page } = queryString;
  const filter = new Filter(Article.find(), queryString)
    .sort()
    .filter()
    .limit();
  const article = await filter.query;
  const paginate = await filter.paginate().query;

  return {
    results: article.length,
    totalPages: Math.ceil(article.length / limit) || 1,
    currentPage: page && page > 0 ? parseInt(page) : 1,
    data: paginate,
  };
};

// POST
// create article
export const createArticle = async (data) => Article.create(data);

// GET
// get article by ID
export const getArticleById = async (id) => Article.findById(id); // .populate('author');

// get list of all articles -- Admin Only
export const listArticles = async () => Article.find(); // .populate('author', 'category');

// get list of all public articles -- For logged in users
export const listPublishedArticles = async () =>
  Article.find({ published: true }); // .populate('author');

// get list of all public articles -- For not logged in
export const listPublicArticles = async () =>
  Article.find({ public: true, published: true }); // .populate('author');

// get list of all unpublished articles -- Admin only - to see unpublished
export const listUnpublishedArticles = async () =>
  Article.find({ published: false }); // .populate('author');

// PUT
// edit article
export const updateArticle = async (id, data) =>
  Article.findByIdAndUpdate(id, data, {
    new: true,
  });

// DELETE
// delete article
export const removeArticle = async (id) => Article.findByIdAndRemove(id);
