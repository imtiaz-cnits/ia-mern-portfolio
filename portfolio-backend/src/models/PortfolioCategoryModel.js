const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({
    category_name: {type: String, required: true}
}, {timestamps: true, versionKey: false});

const PortfolioCategoryModel = mongoose.model("portfolio_categories", DataSchema);

module.exports = PortfolioCategoryModel;