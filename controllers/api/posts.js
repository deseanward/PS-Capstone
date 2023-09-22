const { useParams } = require("react-router-dom");
const Post = require("../../models/post");

// Create a new Post
async function create(req, res) {
  console.log("INSIDE CONTROLLER POST");
  try {
    const post = await Post.create(req.body);
    res.json(post);
  } catch (error) {
    res.status(400).json(error);
  }
}

// Get all the Posts
async function getAllPosts(req, res) {
  console.log("INSIDE GET: ", req);
  try {
    const posts = await Post.find({}).sort({ updatedAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(400).json(error);
  }
}

// Get a post
async function getPost(req, res) {
  console.log("INSIDE CONTROLLER API", req.params.id);
  const id = req.params.id;

  try {
    const post = await Post.findById(id);
    console.log("FOUND: ", post);
    res.json(post);
  } catch (error) {
    res.status(400).json(error);
  }
}

// Update a post
async function updatePost(req, res) {
  const id = req.params.id;
  console.log("INSIDE EDIT POST", id);
  try {
    const post = await Post.findByIdAndUpdate(id, req.body, { new: true });
    res.json(post);
  } catch (error) {
    console.log("ERROR WHEN UPDATING", error);
    res.status(400).json(error);
  }
}

// DELETE a post
async function deletePost(req, res) {
  console.log("INSIDE CONTROLLER API", req.params.id);
  const id = req.params.id;

  try {
    const post = await Post.findByIdAndDelete(id, null, { new: true });
    console.log("DELEtED: ", post);
    res.json(post);
  } catch (error) {
    res.status(400).json(error);
  }
}

// Check the token
async function checkToken(req, res) {
  // req.user will always be there for you when a token is sent
  console.log("req.user", req.user);
  res.json(req.exp);
}

module.exports = {
  create,
  getAllPosts,
  getPost,
  updatePost,
  deletePost,
  checkToken,
};
