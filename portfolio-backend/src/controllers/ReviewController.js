const {ReviewCreateService,
    ReviewListService,
    ReviewUpdateService,
    ReviewDeleteService} = require("../services/ReviewService");

exports.ReviewCreate = async (req, res) => {
    const result = await ReviewCreateService(req);
    return res.status(200).json(result);
}

exports.ReviewList = async (req, res) => {
    const result = await ReviewListService();
    return res.status(200).json(result);
}

exports.ReviewUpdate = async (req, res) => {
    const result = await ReviewUpdateService(req);
    return res.status(200).json(result);
}

exports.ReviewDelete = async (req, res) => {
    const result = await ReviewDeleteService(req);
    return res.status(200).json(result);
}