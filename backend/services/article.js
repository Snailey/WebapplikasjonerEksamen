import Article from '../models/article.js';

// POST
// create article
export const createArticle = async (data) => Article.create(data);

// GET
// get article by ID
export const getArticleById = async (id) => Article.findById(id);

// get list of all articles
export const listArticles = async () => Article.find();

// get list of all public articles

// PUT
// edit article by id

// DELETE
// delete article by id
