const User = require("../../models/user");
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

//* ----- Show User's Home Page ----- *//
// async function showUserProfile(req, res) {
//   const currentUser = getUser();
//   res.status(200).send(`/user/${currentUser._id}`);
// }

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
  // showUserProfile,
  createJWT,
  checkToken,
};
