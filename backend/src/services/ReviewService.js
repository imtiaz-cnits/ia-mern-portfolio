const ReviewModel = require("../models/ReviewModel");

// Client
const ReviewCreateService = async (req, res) => {
    try {
        const reqBody = req.body;
        await ReviewModel.create(reqBody);
        return {status: "success", message: "Review Created Successful"};
    } catch (e) {
        return {status: "fail", message: "Something Went Wrong!"};
    }
}

const ReviewListService = async (req, res) => {
    try {
        const JoinWithClientStage = {$lookup: {from: "clients", localField: "client_id", foreignField: "_id", as: "client"}};
        const UnwindClientStage = {$unwind: "$client"};
        const ProjectionStage = {$project: {"client_id": 0}};
        const data = await ReviewModel.aggregate([
            JoinWithClientStage,
            UnwindClientStage,
            ProjectionStage
        ]);
        return {status: "success", data: data};
    } catch (e) {
        return {status: "fail", message: "Something Went Wrong!", e:e};
    }
}

const ReviewUpdateService = async (req, res) => {
    try {
        let category_id = req.params.CategoryID;
        let reqBody = req.body;
        await ReviewModel.updateOne({_id: category_id}, {$set: reqBody});
        return {status: "success", message: "Review Updated Successful"};
    } catch (e) {
        return {status: "fail", message: "Something Went Wrong!"};
    }
}

const ReviewDeleteService = async (req, res) => {
    try {
        let category_id = req.params.CategoryID;
        await ReviewModel.deleteOne({_id: category_id});
        return {status: "success", message: "Review Deleted Successful"};
    } catch (e) {
        return {status: "fail", message: "Something Went Wrong!"};
    }
}

module.exports = {
    ReviewCreateService,
    ReviewListService,
    ReviewUpdateService,
    ReviewDeleteService
};