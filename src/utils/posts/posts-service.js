import * as postsApi from "./posts-api";

export async function createPost(postData) {
  // Calling the userAPI signUp function
  const post = await postsApi.createPost(postData);

  // Return the current user from the 'getUser' call
  return post;
}

export async function getPosts() {
  const posts = await postsApi.getPosts();

  // Return the collection of posts
  return posts;
}

export async function getPost(id) {
  console.log("INSIDE POST SERVICE: ");
  const post = await postsApi.getPost(id);
  console.log("INSIDE POST SERVICE W/ POST ", post);
  return post;
}

// export async function editPost(id) {
//   const post = await postsApi.editPost(id)

//   return post;
// }
