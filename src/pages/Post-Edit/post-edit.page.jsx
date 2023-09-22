import React, { useEffect } from "react";
import PostEditForm from "../../components/post-edit/post-edit.component";
import { useParams } from "react-router-dom";
import * as postsService from "../../utils/posts/posts-service";
import { useSelector } from "react-redux";

const PostEditPage = () => {
  const { id } = useParams();
  // console.log("EDIT POST PAGE ID: ", id);
  // const post = useSelector((state) =>
  //   state.posts.find((post) => post._id === id)
  // );
  // console.log("GOT THE POST FROM STATE:", post);
  useEffect(() => {
    // const getThePost = async () => {
    //   const post = await postsService.getPost(id);
    //   console.log("GOT THE POST!!!: ", post);
    // };
    // getThePost();
  }, [id]);

  return (
    <div>
      <h1>Update Post</h1>
      <PostEditForm />
    </div>
  );
};

export default PostEditPage;
