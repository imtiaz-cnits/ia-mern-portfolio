const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({
    title: {type: String, required: true},
    sub_title: {type: String, required: true},
    portfolio_category_id: {type: mongoose.Schema.Types.ObjectId, required: true},
    client_id: {type: mongoose.Schema.Types.ObjectId, required: true},
    des:  {type: String, required: true},
    img1:  {type: String, required: true},
    img2:  {type: String, required: true}
}, {timestamps: true, versionKey: false});

const PortfolioModel = mongoose.model("portfolios", DataSchema);

module.exports = PortfolioModel;