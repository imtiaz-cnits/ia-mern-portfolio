const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({
    client_name: {type: String, required: true},
    client_img: {type: String, required: true},
    client_logo: {type: String, required: true},
    company: {type: String, required: true},
}, {timestamps: true, versionKey: false});

const ClientModel = mongoose.model("clients", DataSchema);

module.exports = ClientModel;