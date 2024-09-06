const {
  BlogCategoryCreateService,
  BlogCategoryListService,
  BlogCategoryUpdateService,
  BlogCategoryDeleteService,
  BlogCreateService,
  BlogListService,
  BlogDetailsService,
  BlogListByCategoryService,
  BlogUpdateService,
  BlogDeleteService,
} = require("../services/BlogService");

// Blog Category
exports.BlogCategoryCreate = async (req, res) => {
  const result = await BlogCategoryCreateService(req);
  return res.status(200).json(result);
};

exports.BlogCategoryList = async (req, res) => {
  const result = await BlogCategoryListService();
  return res.status(200).json(result);
};

exports.BlogCategoryUpdate = async (req, res) => {
  const result = await BlogCategoryUpdateService(req);
  return res.status(200).json(result);
};

exports.BlogCategoryDelete = async (req, res) => {
  const result = await BlogCategoryDeleteService(req);
  return res.status(200).json(result);
};

// portfolio
exports.BlogCreate = async (req, res) => {
  const result = await BlogCreateService(req);
  return res.status(200).json(result);
};

exports.BlogList = async (req, res) => {
  const result = await BlogListService();
  return res.status(200).json(result);
};

exports.BlogDetails = async (req, res) => {
  const result = await BlogDetailsService(req);
  return res.status(200).json(result);
};

exports.BlogListByCategory = async (req, res) => {
  const result = await BlogListByCategoryService(req);
  return res.status(200).json(result);
};

exports.BlogUpdate = async (req, res) => {
  const result = await BlogUpdateService(req);
  return res.status(200).json(result);
};

exports.BlogDelete = async (req, res) => {
  const result = await BlogDeleteService(req);
  return res.status(200).json(result);
};
