const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    field: { type: String, required: true },
    gender: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    country: { type: String, required: true },
    Linkedin: { type: String, required: true },

});
const ClientData = mongoose.model("ClientData", dataSchema);
module.exports = ClientData;