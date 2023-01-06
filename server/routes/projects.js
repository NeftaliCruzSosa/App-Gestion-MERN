const express = require("express");
const router = express.Router();

// Load controllers
const projectsController = require("../controllers/projectsController");

// Routes for the projects entity
router.get("/", projectsController.getProjects);
router.get("/:id", projectsController.getProject);
router.post("/", projectsController.createProject);
router.put("/:id", projectsController.updateProject);
router.delete("/:id", projectsController.deleteProject);

module.exports = router;
