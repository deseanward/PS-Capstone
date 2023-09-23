const express = require("express");
const usersCtrl = require("../../controllers/api/users");
const ensureLoggedIn = require("../../config/ensure-loggedin");
const router = express.Router();

// GET
router.get("/check-token", usersCtrl.checkToken);

// Insert ensureLoggedIn on all routes
router.get("/check-token", ensureLoggedIn, usersCtrl.checkToken);

// GET user from DB
router.get("/:id", usersCtrl.getUserFromDB);

// POST
router.post("/", usersCtrl.create);
router.post("/login", usersCtrl.logIn)

module.exports = router;
