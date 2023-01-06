const express = require("express");
const router = express.Router();

// Load controllers
const teamsController = require("../controllers/teamsController");

// Routes for the teams entity
router.get("/", teamsController.getTeams);
router.get("/:id", teamsController.getTeam);
router.post("/", teamsController.createTeam);
router.put("/:id", teamsController.updateTeam);
router.delete("/:id", teamsController.deleteTeam);

module.exports = router;
