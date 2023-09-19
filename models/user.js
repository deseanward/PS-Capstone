const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;
const SALT_ROUNDS = 6;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      minLength: 3,
      required: true,
    },

    avatar: {
      type: String,
      required: false,
    },

    bio: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  }
);

// Pre-save hook to encypt a password when created or updated
userSchema.pre("save", async function (next) {
  // 'this' is the user document
  if (!this.isModified("password")) return next();

  // Update teh password with the computed hash
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  return next();
});

const postSchema = new Schema(
  {
    authorId: {
      type: Schema.Types.ObjectId,
      ref: "user",
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

module.exports = mongoose.model("User", userSchema);
module.exports = mongoose.model("Post", postSchema);
module.exports = mongoose.model("Comment", commentSchema);
