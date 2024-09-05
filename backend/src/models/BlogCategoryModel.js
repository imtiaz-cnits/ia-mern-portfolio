const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({
    category_name: {type: String, required: true},
}, {timestamps: true, versionKey: false});

const BlogCategoryModel = mongoose.model("blog_categories", DataSchema);

module.exports = BlogCategoryModel;