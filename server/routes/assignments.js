const express = require("express");
const router = express.Router();

// Load controllers
const assignmentsController = require("../controllers/assignmentsController");

// Routes for the projects entity
router.get("/", assignmentsController.getAssignments);
router.get("/:id", assignmentsController.getAssignment);
router.post("/", assignmentsController.createAssignment);
router.put("/:id", assignmentsController.updateAssignment);
router.delete("/:id", assignmentsController.deleteAssignment);

module.exports = router;
