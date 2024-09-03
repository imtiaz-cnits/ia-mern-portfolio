const ClientModel = require("../models/ClientModel");

// Client
const ClientCreateService = async (req, res) => {
    try {
        const reqBody = req.body;
        await ClientModel.create(reqBody);
        return {status: "success", message: "Client Created Successful"};
    } catch (e) {
        return {status: "fail", message: "Something Went Wrong!"};
    }
}

const ClientListService = async (req, res) => {
    try {
        const data = await ClientModel.find();
        return {status: "success", data: data};
    } catch (e) {
        return {status: "fail", message: "Something Went Wrong!"};
    }
}

const ClientUpdateService = async (req, res) => {
    try {
        let category_id = req.params.CategoryID;
        let reqBody = req.body;
        await ClientModel.updateOne({_id: category_id}, {$set: reqBody});
        return {status: "success", message: "Client Updated Successful"};
    } catch (e) {
        return {status: "fail", message: "Something Went Wrong!"};
    }
}

const ClientDeleteService = async (req, res) => {
    try {
        let category_id = req.params.CategoryID;
        await ClientModel.deleteOne({_id: category_id});
        return {status: "success", message: "Client Deleted Successful"};
    } catch (e) {
        return {status: "fail", message: "Something Went Wrong!"};
    }
}

module.exports = {
    ClientCreateService,
    ClientListService,
    ClientUpdateService,
    ClientDeleteService
};