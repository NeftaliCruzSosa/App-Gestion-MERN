const express = require("express");
const router = express.Router();

// Load controllers
const teamsController = require("../controllers/teamsController");

//Load middlewares
const authenticate = require('../middlewares/auth');

// Securized routes for the teams entity
router.get("/", authenticate, teamsController.getTeams);
router.get("/:id", authenticate, teamsController.getTeam);
router.post("/", authenticate, teamsController.createTeam);
router.put("/:id", authenticate, teamsController.updateTeam);
router.delete("/:id", authenticate, teamsController.deleteTeam);

module.exports = router;
