import * as usersApi from "./users-api.js";

export async function signUp(userData) {
  // Calling the userAPI signUp function
  const token = await usersApi.signUp(userData);

  // Store the token in Local Token (already 'stringified')
  localStorage.setItem("SEIToken", token);

  // Return the current user from the 'getUser' call
  return getUser();
}

// Log in
export async function logIn(credentials) {
  // Calling the userAPI signUp function
  const token = await usersApi.logIn(credentials);

  // Store the token in Local Token (already 'stringified')
  localStorage.setItem("SEIToken", token);

  // Return the current user from the 'getUser' call
  return getUser();
}

// Remove the token on logout
export async function logOut() {
  localStorage.removeItem("SEIToken");
}

// Update user
export async function updateUser(userData) {
  const user = await usersApi.updateUser(userData);
  return user;
}

// Gets an individual user from the database
export async function getUserFromDB(id) {
  const user = await usersApi.getUserFromDB(id);

  if (!user) throw new Error("An error occurred, or user not found.");
  return user;
}

// Gets an individual user from the database
export async function deleteUser(id) {
  const user = await usersApi.deleteUser(id);

  if (!user) throw new Error("An error occurred, or user not found.");
  if (user) console.log("USER SERVICE GOT USER", user);
  return user;
}

// Validates the token
export function getToken() {
  // getItem returns null if there's no string
  const token = localStorage.getItem("SEIToken");

  if (!token) return null;

  // Obtain the payload of the token
  const payload = JSON.parse(atob(token.split(".")[1]));

  // A JWT's exp is expressed in seconds, not milliseconds, so convert
  if (payload.exp < Date.now() / 1000) {
    // Token has expired - remove it from localStorage
    localStorage.removeItem("SEIToken");
    return null;
  }
  return token;
}

export async function checkToken() {
  const dateStr = await usersApi.checkToken();
  return new Date(dateStr);
}

// Gets and verifies the current/logged in user from the token
export function getUser() {
  const token = getToken();
  // If there's a token, return the user in the payload, otherwise return null
  return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}
