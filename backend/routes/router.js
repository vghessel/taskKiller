const router = require("express").Router();

// Tasks Router
const tasksRouter = require("./tasks");
router.use("/", tasksRouter);

module.exports = router;