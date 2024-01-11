const mongoose = require("mongoose");

const { Schema } = mongoose;

const tasksSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    status: {
        type: Boolean,
        required: true
    },
}, {timestamps: true});

const tasksModel = mongoose.model("listModel", tasksSchema);

module.exports = {
    tasksModel,
    tasksSchema,
};