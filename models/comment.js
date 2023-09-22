const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new mongoose.Schema(
    {
      // always require all comments to point to the top post, for easy query of all comments whether nested or not
      postId: {
        type: Schema.Types.ObjectId,
        ref: "posts",
        required: true,
      },
  
      parentCommentId: {
        type: Schema.Types.ObjectId,
        ref: "comments",
        required: false, // if not populated, then its a top level comment
      },
  
      user: {
        type: String,
        required: true,
      },
  
      body: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );

  module.exports = mongoose.model("Comment", commentSchema);
