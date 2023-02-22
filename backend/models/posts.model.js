const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
});

const PostsModel = mongoose.model("post", postSchema);

module.exports = PostsModel;
