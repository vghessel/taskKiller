const router = require("express").Router();

const taskController = require("../controllers/taskController");

router.route("/tasks").post((req, res) => taskController.create(req, res));

module.exports = router;