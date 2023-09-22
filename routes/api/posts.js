const express = require("express");
const postsCtrl = require("../../controllers/api/posts");
const ensureLoggedin = require("../../config/ensure-loggedin");
const router = express.Router();

// GET user post page
// router.get("/posts/:id", postsCtrl.showUserPost);

// Insert ensureLoggedIn on all routes
router.get("/check-token", ensureLoggedin, postsCtrl.checkToken);

// POST - intercepted from 'utils/posts/post-api and passes it to the controller
// The controller makes the actuall call to the database

// Get All Posts
router.get("/", postsCtrl.getAllPosts);

// Get a post
router.get("/:id", postsCtrl.getPost);

// Create New Post
router.post("/", postsCtrl.create);

// Update a post
router.put("/:id", postsCtrl.updatePost);

module.exports = router;
