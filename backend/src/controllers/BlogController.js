const {BlogCategoryCreateService,
    BlogCategoryListService,
    BlogCategoryUpdateService,
    BlogCategoryDeleteService} = require("../services/BlogService");

// Blog Category
exports.BlogCategoryCreate = async (req, res) => {
    const result = await BlogCategoryCreateService(req);
    return res.status(200).json(result);
}

exports.BlogCategoryList = async (req, res) => {
    const result = await BlogCategoryListService();
    return res.status(200).json(result);
}

exports.BlogCategoryUpdate = async (req, res) => {
    const result = await BlogCategoryUpdateService(req);
    return res.status(200).json(result);
}

exports.BlogCategoryDelete = async (req, res) => {
    const result = await BlogCategoryDeleteService(req);
    return res.status(200).json(result);
}