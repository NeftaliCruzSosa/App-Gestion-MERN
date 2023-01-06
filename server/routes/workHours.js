const express = require("express");
const router = express.Router();

// Load controllers
const workHoursController = require("../controllers/workHoursController");

// Routes for the work hours entity
router.get("/", workHoursController.getWorkHours);
router.get("/:id", workHoursController.getWorkHour);
router.post("/", workHoursController.createWorkHour);
router.put("/:id", workHoursController.updateWorkHour);
router.delete("/:id", workHoursController.deleteWorkHour);

module.exports = router;
