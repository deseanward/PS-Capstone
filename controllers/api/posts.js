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

// // Get all the Posts
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
  console.log("INSIDE GET POSTS", req.id);

  try {
    // const post = await Post.findById({ id });
    // console.log(post);
    // res.json(post);
  } catch (error) {
    res.status(400).json(error);
  }
}

// // Edit a post
// async function edit(req, res) {
//   console.log("INSIDE EDIT POST");
//   const id = req._id;
//   try {
//     const post = await Post.findById({ id });
//     res.json(post);
//   } catch (error) {
//     res.status(400).json(error);
//   }
// }

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
  // edit,
  checkToken,
};
