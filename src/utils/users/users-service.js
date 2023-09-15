import * as usersApi from "./users-api";

export async function signUp(userData) {
  // Calling the userAPI signUp function
  const token = await usersApi.signUp(userData);

  // Store the token in Local Token (already 'stringified')
  localStorage.setItem("SEIToken", token);
  return getUser();
}

// Log in
export async function logIn(credentials) {
  // Calling the userAPI signUp function
  const token = await usersApi.logIn(credentials);

  // Store the token in Local Token (already 'stringified')
  localStorage.setItem("SEIToken", token);
  return getUser();
}

// Remove the token on logout
export async function logOut() {
  localStorage.removeItem("SEIToken");
}

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
  const dateStr = await  usersApi.checkToken();
  return new Date(dateStr);
}

export function getUser() {
  const token = getToken();
  // If there's a token, return the user in the payload, otherwise return null
  return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}
