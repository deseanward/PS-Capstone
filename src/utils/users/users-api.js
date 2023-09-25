import { getToken } from "../users/users-service";
const BASE_URL = "/api/users";

export function signUp(userData) {
  return sendRequest(BASE_URL, "POST", userData);
}

export function logIn(credentials) {
  return sendRequest(`${BASE_URL}/login`, "POST", credentials);
}

export function getAllUsers() {
  return sendRequest(BASE_URL, "GET", null);
}

export function getUserFromDB(id) {
  const user = sendRequest(`${BASE_URL}/${id}`, "GET", null);

  return user;
}

export function updateUser(userData) {
  const user = sendRequest(`${BASE_URL}/${userData._id}`, "PATCH", userData);
  return user;
}

export function deleteUser(id) {
  const user = sendRequest(`${BASE_URL}/${id}`, "DELETE", null);
  console.log("USER API GOT USER", user);
  return user;
}

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}

// * ---- Helper Functions ---- *//
async function sendRequest(url, method = "GET", payload = null) {
  // Fetch accepts an options object as the 2nd argument
  // used to include a data payload, set headers, etc.
  const options = { method };
  if (payload) {
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(payload);
  }

  const token = getToken();
  if (token) {
    // Ensure the headers object exists
    options.headers = options.headers || {};
    // Add token to an Authorization header
    // Prefacing with 'Bearer' is recommended in the HTTP specification
    options.headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(url, options);
  // res.ok will be false if the status code set to 4xx in the controller action
  if (res.ok) return res.json();
  throw new Error("Bad Request");
}
