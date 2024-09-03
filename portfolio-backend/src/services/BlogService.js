const BlogCategoryModel = require("../models/BlogCategoryModel");

// Blog Category
const BlogCategoryCreateService = async (req, res) => {
    try {
        const reqBody = req.body;
        await BlogCategoryModel.create(reqBody);
        return {status: "success", message: "Blog Category Created Successful"};
    } catch (e) {
        return {status: "fail", message: "Something Went Wrong!"};
    }
}

const BlogCategoryListService = async (req, res) => {
    try {
        const data = await BlogCategoryModel.find();
        return {status: "success", data: data};
    } catch (e) {
        return {status: "fail", message: "Something Went Wrong!"};
    }
}

const BlogCategoryUpdateService = async (req, res) => {
    try {
        let category_id = req.params.CategoryID;
        let reqBody = req.body;
        await BlogCategoryModel.updateOne({_id: category_id}, {$set: reqBody});
        return {status: "success", message: "Blog Category Updated Successful"};
    } catch (e) {
        return {status: "fail", message: "Something Went Wrong!"};
    }
}

const BlogCategoryDeleteService = async (req, res) => {
    try {
        let category_id = req.params.CategoryID;
        await BlogCategoryModel.deleteOne({_id: category_id});
        return {status: "success", message: "Blog Category Deleted Successful"};
    } catch (e) {
        return {status: "fail", message: "Something Went Wrong!"};
    }
}

module.exports = {
    BlogCategoryCreateService,
    BlogCategoryListService,
    BlogCategoryUpdateService,
    BlogCategoryDeleteService
};
