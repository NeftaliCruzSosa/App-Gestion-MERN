const express = require("express");
const router = express.Router();

// Load controllers
const tasksController = require("../controllers/tasksController");

// Routes for the tasks entity
router.get("/", tasksController.getTasks);
router.get("/:id", tasksController.getTask);
router.post("/", tasksController.createTask);
router.put("/:id", tasksController.updateTask);
router.delete("/:id", tasksController.deleteTask);

module.exports = router;
