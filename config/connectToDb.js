/** @format */

//load env variables
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const mongoose = require("mongoose");

async function connectToDb() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("connected to database");
  } catch (err) {
    console.log(err);
  }
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = connectToDb;
