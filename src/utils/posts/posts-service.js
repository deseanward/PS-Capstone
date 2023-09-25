import * as postsApi from "./posts-api";

export async function createPost(postData) {
  // Calling the userAPI signUp function
  const post = await postsApi.createPost(postData);

  // Return the current user from the 'getUser' call
  return post;
}

// Get all posts
export async function getPosts() {
  const posts = await postsApi.getPosts();

  // Return the collection of posts
  return posts;
}

// Get individual post
export async function getPost(id) {
  const post = await postsApi.getPost(id);
  return post;
}

// Update a post
export async function updatePost(postData) {
  const post = await postsApi.updatePost(postData)

  return post;
}

// Delete a post
export async function deletePost(id) {
  const post = await postsApi.deletePost(id);
  return post;
}
