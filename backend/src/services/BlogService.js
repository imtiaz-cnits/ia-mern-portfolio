const BlogModel = require("../models/BlogModel");
const BlogCategoryModel = require("../models/BlogCategoryModel");
const mongoose = require("mongoose");
const PortfolioModel = require("../models/PortfolioModel");
const ObjectId = mongoose.Types.ObjectId;

// Blog Category
const BlogCategoryCreateService = async (req, res) => {
  try {
    const reqBody = req.body;
    await BlogCategoryModel.create(reqBody);
    return { status: "success", message: "Blog Category Created Successful" };
  } catch (e) {
    return { status: "fail", message: "Something Went Wrong!" };
  }
};

const BlogCategoryListService = async (req, res) => {
  try {
    const data = await BlogCategoryModel.find();
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", message: "Something Went Wrong!" };
  }
};

const BlogCategoryUpdateService = async (req, res) => {
  try {
    let category_id = req.params.CategoryID;
    let reqBody = req.body;
    await BlogCategoryModel.updateOne({ _id: category_id }, { $set: reqBody });
    return { status: "success", message: "Blog Category Updated Successful" };
  } catch (e) {
    return { status: "fail", message: "Something Went Wrong!" };
  }
};

const BlogCategoryDeleteService = async (req, res) => {
  try {
    let category_id = req.params.CategoryID;
    await BlogCategoryModel.deleteOne({ _id: category_id });
    return { status: "success", message: "Blog Category Deleted Successful" };
  } catch (e) {
    return { status: "fail", message: "Something Went Wrong!" };
  }
};

// blog
const BlogCreateService = async (req, res) => {
  try {
    const reqBody = req.body;
    let user_id = new ObjectId(req.userId);

    await BlogModel.create({
      userID: user_id,
      title: reqBody.title,
      des: reqBody.des,
      blogCategoryID: reqBody.blogCategoryID,
      img: reqBody.img});
    return { status: "success", message: "Blog Created Successful"};
  } catch (e) {
    return { status: "fail", message: "Something Went Wrong!" };
  }
};

const BlogListService = async (req, res) => {
  try {
    const { latest } = req.query;
    const JoinWithCategoryStage = {
      $lookup: {
        from: "blog_categories",
        localField: "blogCategoryID",
        foreignField: "_id",
        as: "blog_category",
      },
    };
    const JoinWithUserStage = {
      $lookup: {
        from: "users",
        localField: "userID",
        foreignField: "_id",
        as: "user",
      },
    };
    const UnwindCategoryStage = { $unwind: "$blog_category" };
    const UnwindUserStage = { $unwind: "$user" };
    const ProjectionStage = {
      $project: {
        blogCategoryID: 0,
        userID: 0,
        "user.lastLogin": 0,
        "user.isVerified": 0,
        "user.password": 0,
      },
    };

    let data;
    if (latest === "true") {
      data = await BlogModel.aggregate([
        JoinWithCategoryStage,
        JoinWithUserStage,
        UnwindCategoryStage,
        UnwindUserStage,
        ProjectionStage,
      ]).sort({ createdAt: -1 }).limit(3);
    } else {
      data = await BlogModel.aggregate([
        JoinWithCategoryStage,
        JoinWithUserStage,
        UnwindCategoryStage,
        UnwindUserStage,
        ProjectionStage,
      ]).sort({ createdAt: -1 });
    }

    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", message: "Something Went Wrong!" };
  }
};

const BlogDetailsService = async (req, res) => {
  try {
    let blog_id = new ObjectId(req.params.BlogID);
    const MatchStage = { $match: { _id: blog_id } };
    const JoinWithCategoryStage = {
      $lookup: {
        from: "blog_categories",
        localField: "blogCategoryID",
        foreignField: "_id",
        as: "blog_category",
      },
    };
    const JoinWithUserStage = {
      $lookup: {
        from: "users",
        localField: "userID",
        foreignField: "_id",
        as: "user",
      },
    };
    const UnwindCategoryStage = { $unwind: "$blog_category" };
    const UnwindUserStage = { $unwind: "$user" };
    const ProjectionStage = {
      $project: {
        blogCategoryID: 0,
        userID: 0,
        "user.lastLogin": 0,
        "user.isVerified": 0,
        "user.password": 0,
      },
    };

    const data = await BlogModel.aggregate([
      MatchStage,
      JoinWithCategoryStage,
      JoinWithUserStage,
      UnwindCategoryStage,
      UnwindUserStage,
      ProjectionStage,
    ]);
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", message: "Something Went Wrong!" };
  }
};

const BlogListByCategoryService = async (req, res) => {
  try {
    let category_id = new ObjectId(req.params.CategoryID);
    const MatchStage = { $match: { blogCategoryID: category_id } };
    const JoinWithCategoryStage = {
      $lookup: {
        from: "blog_categories",
        localField: "blogCategoryID",
        foreignField: "_id",
        as: "blog_category",
      },
    };
    const UnwindCategoryStage = { $unwind: "$blog_category" };
    const ProjectionStage = { $project: { blogCategoryID: 0, userID: 0 } };

    const data = await BlogModel.aggregate([
      MatchStage,
      JoinWithCategoryStage,
      UnwindCategoryStage,
      ProjectionStage,
    ]);
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", message: "Something Went Wrong!" };
  }
};

const BlogUpdateService = async (req, res) => {
  try {
    let blog_id = req.params.BlogID;
    let reqBody = req.body;
    await BlogModel.updateOne({ _id: blog_id }, { $set: reqBody });
    return { status: "success", message: "Blog Updated Successful" };
  } catch (e) {
    return { status: "fail", message: "Something Went Wrong!" };
  }
};

const BlogDeleteService = async (req, res) => {
  try {
    let blog_id = req.params.BlogID;
    await BlogModel.deleteOne({ _id: blog_id });
    return { status: "success", message: "Blog Deleted Successful" };
  } catch (e) {
    return { status: "fail", message: "Something Went Wrong!" };
  }
};

module.exports = {
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
};
