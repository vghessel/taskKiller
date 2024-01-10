const mongoose = require("mongoose");

const { Schema } = mongoose;

const { tasksSchema } = require("./tasksModel");

const listsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    tasks: {
        type: [tasksSchema],
    },
}, {timestamps: true});

const listsModel = mongoose.model("listsModel", listsSchema);

module.exports = listsModel;