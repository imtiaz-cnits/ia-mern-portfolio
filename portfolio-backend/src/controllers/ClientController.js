const {ClientCreateService,
    ClientListService,
    ClientUpdateService,
    ClientDeleteService} = require("../services/ClientService");

// Blog Category
exports.ClientCreate = async (req, res) => {
    const result = await ClientCreateService(req);
    return res.status(200).json(result);
}

exports.ClientList = async (req, res) => {
    const result = await ClientListService();
    return res.status(200).json(result);
}

exports.ClientUpdate = async (req, res) => {
    const result = await ClientUpdateService(req);
    return res.status(200).json(result);
}

exports.ClientDelete = async (req, res) => {
    const result = await ClientDeleteService(req);
    return res.status(200).json(result);
}