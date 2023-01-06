const express = require("express");
const router = express.Router();

// Load controllers
const assignmentsController = require("../controllers/assignmentsController");

//Load middlewares
const authenticate = require('../middlewares/auth');

// Securized routes for the projects entity
router.get("/", authenticate, assignmentsController.getAssignments);
router.get("/:id", authenticate, assignmentsController.getAssignment);
router.post("/", authenticate, assignmentsController.createAssignment);
router.put("/:id", authenticate, assignmentsController.updateAssignment);
router.delete("/:id", authenticate, assignmentsController.deleteAssignment);

module.exports = router;
