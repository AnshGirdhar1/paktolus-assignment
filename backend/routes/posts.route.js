const { Router } = require("express");
const PostsModel = require("../models/posts.model");
const postsRouter = Router();

postsRouter.post("/", async (req, res) => {
  let { name, message } = req.body;
  name = name.toLowerCase();
  try {
    await PostsModel.insertMany([{ name, message }]);
    res.send({
      message: "Post Posted Successfully",
    });
  } catch (e) {
    res.send({
      message: "Something Went Wrong. Failed to post",
    });
  }
});

postsRouter.get("/", async (req, res) => {
  try {
    let posts;
    if (req?.query?.name) {
      const name = req.query.name.toLowerCase();
      posts = await PostsModel.find({ name });
    } else {
      posts = await PostsModel.find();
    }
    res.send({
      posts,
    });
  } catch (e) {
    console.log(e);
    res.send({
      message: "Something Went Wrong",
    });
  }
});

module.exports = postsRouter;
