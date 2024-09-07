const {PortfolioCreateService,
    PortfolioListService,
    PortfolioDetailsService,
    PortfolioListByCategoryService,
    PortfolioUpdateService,
    PortfolioDeleteService,
    PortfolioCategoryCreateService,
    PortfolioCategoryListService,
    PortfolioCategoryUpdateService,
    PortfolioCategoryDeleteService} = require("../services/PortfolioService");

exports.PortfolioCreate = async (req, res) => {
    const result = await PortfolioCreateService(req);
    return res.status(200).json(result);
}

exports.PortfolioList = async (req, res) => {
    const result = await PortfolioListService(req);
    return res.status(200).json(result);
}

exports.PortfolioDetails = async (req, res) => {
    const result = await PortfolioDetailsService(req);
    return res.status(200).json(result);
}

exports.PortfolioListByCategory = async (req, res) => {
    const result = await PortfolioListByCategoryService(req);
    return res.status(200).json(result);
}

exports.PortfolioUpdate = async (req, res) => {
    const result = await PortfolioUpdateService(req);
    return res.status(200).json(result);
}

exports.PortfolioDelete = async (req, res) => {
    const result = await PortfolioDeleteService(req);
    return res.status(200).json(result);
}

// PortfolioPage Category

exports.PortfolioCategoryCreate = async (req, res) => {
    const result = await PortfolioCategoryCreateService(req);
    return res.status(200).json(result);
}

exports.PortfolioCategoryList = async (req, res) => {
    const result = await PortfolioCategoryListService();
    return res.status(200).json(result);
}

exports.PortfolioCategoryUpdate = async (req, res) => {
    const result = await PortfolioCategoryUpdateService(req);
    return res.status(200).json(result);
}

exports.PortfolioCategoryDelete = async (req, res) => {
    const result = await PortfolioCategoryDeleteService(req);
    return res.status(200).json(result);
}
