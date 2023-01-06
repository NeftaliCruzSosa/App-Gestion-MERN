const express = require("express");
const router = express.Router();

// Load controllers
const workHoursController = require("../controllers/workHoursController");

//Load middlewares
const authenticate = require('../middlewares/auth');

// Securized routes for the work hours entity
router.get("/", authenticate, workHoursController.getWorkHours);
router.get("/:id", authenticate, workHoursController.getWorkHour);
router.post("/", authenticate, workHoursController.createWorkHour);
router.put("/:id", authenticate, workHoursController.updateWorkHour);
router.delete("/:id", authenticate, workHoursController.deleteWorkHour);

module.exports = router;
