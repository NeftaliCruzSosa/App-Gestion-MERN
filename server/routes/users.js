const express = require("express");
const router = express.Router();

// Load controllers
const usersController = require("../controllers/usersController");

//Load middlewares
const authenticate = require('../middlewares/auth');

// Routes for the users entity
router.post("/login", usersController.login)
router.post("/logout", usersController.logout)
router.post("/register", usersController.register)

// Securized routes for the users entity
router.post("/checksession", authenticate, usersController.checksession)
router.get("/", usersController.getUsers);
router.get("/:id", authenticate, usersController.getUser);
router.put("/", authenticate, usersController.updateUser);
router.delete("/:id", authenticate, usersController.deleteUser);

module.exports = router;
