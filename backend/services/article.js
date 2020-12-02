import Article from '../models/article.js';

// POST
// create article
export const createArticle = async (data) => Article.create(data);

// GET
// get article by ID
export const getArticleById = async (id) =>
  Article.findById(id).populate('author');

// get list of all articles
export const listArticles = async () => Article.find().populate('author');

// get list of all public articles
export const listPublicArticles = async () =>
  Article.find({ public: true }).populate('author');

// PUT
// edit article
export const updateArticle = async (id, data) =>
  Article.findByIdAndUpdate(id, data, {
    new: true,
  });

// DELETE
// delete article
export const removeArticle = async (id) => Article.findByIdAndRemove(id);
