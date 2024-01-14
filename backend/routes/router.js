const router = require("express").Router();

// Tasks Router
const tasksRouter = require("./tasks");
router.use("/", tasksRouter);

// Lists Router
const listsRouter = require("./lists");
router.use("/", listsRouter);

module.exports = router;