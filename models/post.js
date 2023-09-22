const mongoose = require("mongoose");
const { useParams } = require("react-router-dom");

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    authorId: {
      type: String,
      required: true,
    },

    author: {
      type: String,
      required: true,
    },

    body: {
      type: String,
      required: true,
    },

    imageUrl: {
      type: String,
      required: false,
    },

    videoUrl: {
      type: String,
      required: false,
    },

    attachmentUrl: {
      type: String,
      required: false,
    },

    audioUrl: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

postSchema.method.getId = function () {
  return this._id;
};

module.exports = mongoose.model("Post", postSchema);
