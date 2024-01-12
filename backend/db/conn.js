const mongoose = require("mongoose");

async function main() {
    try {

        mongoose.set("strictQuery", true);

        await mongoose.connect(
            "mongodb+srv://vgerlachhessel:<password>@cluster7.tjnxkvv.mongodb.net/?retryWrites=true&w=majority"
        );
        console.log("Connected to database")
    } catch (error) {
        console.log(`Erro: ${error}`);
    }
};

module.exports = main;