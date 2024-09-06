const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    gender: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    country: { type: String, required: true },
    Linkedin: { type: String, required: true },

});
const Connections = mongoose.model("Connections", dataSchema);
module.exports = Connections;