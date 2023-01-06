const express = require("express");
const router = express.Router();

// Load controllers
const projectsController = require("../controllers/projectsController");

//Load middlewares
const authenticate = require('../middlewares/auth');

// Securized routes for the projects entity
router.get("/", authenticate, projectsController.getProjects);
router.get("/:id", authenticate, projectsController.getProject);
router.post("/", authenticate, projectsController.createProject);
router.put("/:id", authenticate, projectsController.updateProject);
router.delete("/:id", authenticate, projectsController.deleteProject);

module.exports = router;
