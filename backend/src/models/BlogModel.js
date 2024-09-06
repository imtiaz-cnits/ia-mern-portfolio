const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    blogCategoryID: { type: mongoose.Schema.Types.ObjectId, required: true },
    userID: { type: mongoose.Schema.Types.ObjectId, required: true },
    des: { type: String, required: true },
    img: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

const BlogModel = mongoose.model("blogs", DataSchema);

module.exports = BlogModel;
