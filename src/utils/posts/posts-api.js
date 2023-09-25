import { getToken } from "../users/users-service";

const BASE_URL = "/api/posts";

// Call to the 'post' route from the helper function
// Caught by the 'routes/api'', then passed to the controller
export function createPost(postData) {
  return sendRequest(BASE_URL, "POST", postData);
}

// GET all the Posts
export function getPosts() {
  return sendRequest(BASE_URL, "GET", null);
}

// GET A Post
export function getPost(id) {
  return sendRequest(`${BASE_URL}/${id}`, "GET", null);
}

// UPDATE/PUT A Post
export function updatePost(postData) {
  return sendRequest(`${BASE_URL}/${postData._id}`, "PUT", postData);
}

// DELETE A Post
export function deletePost(id) {
  return sendRequest(`${BASE_URL}/${id}`, "DELETE", null);
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
  // Call to fetch the url
  const res = await fetch(url, options);
  console.log("POST RESPONSE: ", res);

  // res.ok will be false if the status code set to 4xx in the controller action
  if (res.ok) return res.json();
  throw new Error("Bad Request");
}
