const PortfolioModel = require("../models/PortfolioModel");
const PortfolioCategoryModel = require("../models/PortfolioCategoryModel");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const PortfolioCreateService = async (req, res) => {
  try {
    const reqBody = req.body;
    await PortfolioModel.create(reqBody);
    return { status: "success", message: "PortfolioPage Created Successful" };
  } catch (e) {
    return { status: "fail", message: "Something Went Wrong!" };
  }
};

const PortfolioListService = async (req, res) => {
  try {
    const { latest } = req.query;
    const JoinWithCategoryStage = {
      $lookup: {
        from: "portfolio_categories",
        localField: "portfolioCategoryID",
        foreignField: "_id",
        as: "portfolio_category",
      },
    };
    const JoinWithClientStage = {
      $lookup: {
        from: "clients",
        localField: "clientID",
        foreignField: "_id",
        as: "client",
      },
    };
    const UnwindCategoryStage = { $unwind: "$portfolio_category" };
    const UnwindClientStage = { $unwind: "$client" };
    const ProjectionStage = {
      $project: { portfolioCategoryID: 0, clientID: 0 },
    };

    let data;
    if (latest === "true") {
      data = await PortfolioModel.aggregate([
        JoinWithCategoryStage,
        JoinWithClientStage,
        UnwindCategoryStage,
        UnwindClientStage,
        ProjectionStage,
      ]).sort({ createdAt: -1 }).limit(3);
    } else {
      data = await PortfolioModel.aggregate([
        JoinWithCategoryStage,
        JoinWithClientStage,
        UnwindCategoryStage,
        UnwindClientStage,
        ProjectionStage,
      ]).sort({ createdAt: -1 });
    }
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", message: "Something Went Wrong!", e: e };
  }
};

const PortfolioDetailsService = async (req, res) => {
  try {
    let portfolio_id = new ObjectId(req.params.PortfolioID);
    const MatchStage = { $match: { _id: portfolio_id } };
    const JoinWithCategoryStage = {
      $lookup: {
        from: "portfolio_categories",
        localField: "portfolioCategoryID",
        foreignField: "_id",
        as: "portfolio_category",
      },
    };
    const JoinWithClientStage = {
      $lookup: {
        from: "clients",
        localField: "clientID",
        foreignField: "_id",
        as: "client",
      },
    };
    const UnwindCategoryStage = { $unwind: "$portfolio_category" };
    const UnwindClientStage = { $unwind: "$client" };
    const ProjectionStage = {
      $project: { portfolioCategoryID: 0, clientID: 0 },
    };

    const data = await PortfolioModel.aggregate([
      MatchStage,
      JoinWithCategoryStage,
      JoinWithClientStage,
      UnwindCategoryStage,
      UnwindClientStage,
      ProjectionStage,
    ]);
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", message: "Something Went Wrong!" };
  }
};

const PortfolioListByCategoryService = async (req, res) => {
  try {
    let category_id = new ObjectId(req.params.CategoryID);

    const MatchStage = { $match: { portfolioCategoryID: category_id } };
    const JoinWithCategoryStage = {
      $lookup: {
        from: "portfolio_categories",
        localField: "portfolioCategoryID",
        foreignField: "_id",
        as: "portfolio_category",
      },
    };
    const UnwindCategoryStage = { $unwind: "$portfolio_category" };
    const ProjectionStage = {
      $project: { portfolioCategoryID: 0, clientID: 0 },
    };

    const data = await PortfolioModel.aggregate([
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

const PortfolioUpdateService = async (req, res) => {
  try {
    let portfolio_id = req.params.PortfolioID;
    let reqBody = req.body;
    await PortfolioModel.updateOne({ _id: portfolio_id }, { $set: reqBody });
    return { status: "success", message: "PortfolioPage Updated Successful" };
  } catch (e) {
    return { status: "fail", message: "Something Went Wrong!" };
  }
};

const PortfolioDeleteService = async (req, res) => {
  try {
    let portfolio_id = req.params.PortfolioID;
    await PortfolioModel.deleteOne({ _id: portfolio_id });
    return { status: "success", message: "PortfolioPage Deleted Successful" };
  } catch (e) {
    return { status: "fail", message: "Something Went Wrong!" };
  }
};

// PortfolioPage Category
const PortfolioCategoryCreateService = async (req, res) => {
  try {
    const reqBody = req.body;
    await PortfolioCategoryModel.create(reqBody);
    return {
      status: "success",
      message: "PortfolioPage Category Created Successful",
    };
  } catch (e) {
    return { status: "fail", message: "Something Went Wrong!" };
  }
};

const PortfolioCategoryListService = async (req, res) => {
  try {
    const data = await PortfolioCategoryModel.find();
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", message: "Something Went Wrong!" };
  }
};

const PortfolioCategoryUpdateService = async (req, res) => {
  try {
    let category_id = req.params.CategoryID;
    let reqBody = req.body;
    await PortfolioCategoryModel.updateOne(
      { _id: category_id },
      { $set: reqBody }
    );
    return {
      status: "success",
      message: "PortfolioPage Category Updated Successful",
    };
  } catch (e) {
    return { status: "fail", message: "Something Went Wrong!" };
  }
};

const PortfolioCategoryDeleteService = async (req, res) => {
  try {
    let category_id = req.params.CategoryID;
    await PortfolioCategoryModel.deleteOne({ _id: category_id });
    return {
      status: "success",
      message: "PortfolioPage Category Deleted Successful",
    };
  } catch (e) {
    return { status: "fail", message: "Something Went Wrong!" };
  }
};

module.exports = {
  PortfolioCreateService,
  PortfolioListService,
  PortfolioDetailsService,
  PortfolioListByCategoryService,
  PortfolioUpdateService,
  PortfolioDeleteService,
  PortfolioCategoryCreateService,
  PortfolioCategoryListService,
  PortfolioCategoryUpdateService,
  PortfolioCategoryDeleteService,
};
