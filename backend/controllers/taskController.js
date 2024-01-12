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
    getAll: async(req, res) => {
        try {
            const tasks = await tasksModel.find();
            res.json(tasks);

        } catch (error) {
            console.log(error);
        }
    },
    get: async(req, res) => {
        try {
            const id = req.params.id;
            const task = await tasksModel.findById(id);

            if(!task) {
                res.status(404).json({msg: "Tarefa não encontrada"});
                return;
            }

            res.json(task);

        } catch (error) {
            console.log(error);
        }
    },
    delete: async(req, res) => {
        try {
            const id = req.params.id;
            const task = await tasksModel.findById(id);

            if(!task) {
                res.status(404).json({msg: "Tarefa não encontrada"});
                return;
            }

            const deletedTask = await tasksModel.findByIdAndDelete(id);
            res.status(200).json({deletedTask, msg: "Tarefa excluida com sucesso"});

        } catch (error) {
            console.log(error);
        }
    },
    update: async(req, res) => {
        try {
            const id = req.params.id;

            const task = {
                title: req.body.title,
                description: req.body.description,
                status: req.body.status,
            };
            
            const updatedService = await tasksModel.findByIdAndUpdate(id, task);

            if(!updatedService) {
                res.status(404).json({msg: "Tarefa não encontrada"});
                return;
            }

            res.status(200).json({task, msg: "Tarefa atualizada com sucesso!"});

        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = taskController;