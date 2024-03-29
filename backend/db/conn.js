const mongoose = require("mongoose");
require("dotenv").config();

async function main() {
    try {

        mongoose.set("strictQuery", true);

        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to database")
    } catch (error) {
        console.log(`Erro: ${error}`);
    }
};

module.exports = main;