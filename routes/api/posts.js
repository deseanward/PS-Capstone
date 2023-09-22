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
// Create New Post
router.post("/", postsCtrl.create);

// Get All Posts
router.route("/:id").get(postsCtrl.getPost);
router.get("/", postsCtrl.getAllPosts);

// // Edit a post
// router.get("/edit/:id", postsCtrl.edit);

// Get a post
// router.get("/:id", postsCtrl.getPost);

module.exports = router;
