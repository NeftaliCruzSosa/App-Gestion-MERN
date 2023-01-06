const express = require("express");
const router = express.Router();

// Load controllers
const tasksController = require("../controllers/tasksController");

//Load middlewares
const authenticate = require('../middlewares/auth');

// Securized routes for the tasks entity
router.get("/", authenticate, tasksController.getTasks);
router.get("/:id", authenticate, tasksController.getTask);
router.post("/", authenticate, tasksController.createTask);
router.put("/:id", authenticate, tasksController.updateTask);
router.delete("/:id", authenticate, tasksController.deleteTask);

module.exports = router;
