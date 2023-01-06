const express = require("express");
const router = express.Router();

// Load controllers
const usersController = require("../controllers/usersController");

// Routes for the users entity
router.get("/", usersController.getUsers);
router.get("/:id", usersController.getUser);
router.post("/", usersController.createUser);
router.put("/:id", usersController.updateUser);
router.delete("/:id", usersController.deleteUser);

module.exports = router;
