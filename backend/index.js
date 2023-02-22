const express = require("express");
const connection = require("./config/db");
const postsRouter = require("./routes/posts.route");
const app = express();
require("dotenv").config();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/posts", postsRouter);

app.listen(process.env.PORT, () => {
  connection();
  console.log("Server Started");
});
