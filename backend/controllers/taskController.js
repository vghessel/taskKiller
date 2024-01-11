const { tasksModel } = require("../models/tasksModel");

const taskController = {

    create: async(req, res) => {
        try {
            const task = {
                title: req.body.title,
                description: req.body.description,
                status: req.body.status,
            };

            const response = await tasksModel.create(task);
            res.status(201).json({response, msg: "Tarefa criada com sucesso!"});

        } catch (error) {
            console.log(error);
        }
    },
};

module.exports = taskController;