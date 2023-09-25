const User = require("../../models/user");
const Post = require("../../models/post");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// const { getUser } = require("../../src/utils/users/users-service");

// Create new user
async function create(req, res) {
  try {
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
  } catch (error) {
    res.status(400).json(error);
  }
}

// Log in
async function logIn(req, res) {
  try {
    // Find a user by email
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();

    // Compare the password with the hashed password
    const match = await bcrypt.compare(req.body.password, user.password);
    console.log("MATCH: ", match);
    if (!match) throw new Error();

    // Create a token
    const token = createJWT(user);
    res.json(token);
  } catch (error) {
    console.log("Error when loggin in", error);
    res.status(400).json(error);
  }
}

//* ----- Get the user ----- *//
async function getUserFromDB(req, res) {
  const id = req.params.id;

  try {
    const found = await User.findById(id);
    res.status(200).json(found);
  } catch (error) {
    console.log("An error occurred accessing the database for user", error);
    res.status(400).json(error);
  }
}

//* ----- Update the user ----- *//
async function updateUser(req, res) {
  const id = req.params.id;

  try {
    const found = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(found);
  } catch (error) {
    console.log("An error occurred accessing the database for user", error);
    res.status(400).json(error);
  }
}

//* ----- Delete the user ----- *//
async function deleteUser(req, res) {
  const id = req.params.id;

  try {
    // Find all posts related to user and delete
    const posts = await Post.deleteMany({ authorId: id });
    // Find the user and delete
    const user = await User.findByIdAndDelete(id);

    if (posts) console.log("CONTROLLER GOT USER", user);
    if (user) console.log("CONTROLLER GOT USER", user);
    res.status(200).json(user);
  } catch (error) {
    console.log(
      "DATABASE: An error occurred deleting the user from the database",
      error
    );
    res.status(400).json(error);
  }
}

// Helper function to create a JWT token
function createJWT(user) {
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
}

// Check the token
async function checkToken(req, res) {
  // req.user will always be there for you when a token is sent
  console.log("req.user", req.user);
  res.json(req.exp);
}

module.exports = {
  create,
  logIn,
  getUserFromDB,
  updateUser,
  deleteUser,
  createJWT,
  checkToken,
};
