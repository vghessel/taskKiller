const mongoose = require("mongoose");

async function main() {
    try {

        mongoose.set("strictQuery", true);

        await mongoose.connect(
            "mongodb+srv://vgerlachhessel:Y8rFT8ZCva0q6M1l@cluster7.tjnxkvv.mongodb.net/?retryWrites=true&w=majority"
        );
        console.log("Connected to database")
    } catch (error) {
        console.log(`Erro: ${error}`);
    }
};

module.exports = main;