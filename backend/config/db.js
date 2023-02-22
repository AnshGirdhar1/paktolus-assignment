const mongoose = require("mongoose");

const connection = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB connected");
  } catch (e) {
    console.log(e);
  }
};

module.exports = connection;
