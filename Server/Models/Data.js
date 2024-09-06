const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    field: { type: String, required: true },
    gender: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    status: { type: String, required: true },

});
const Data = mongoose.model("Data", dataSchema);
module.exports = Data;
