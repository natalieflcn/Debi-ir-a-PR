const mongoose = require("mongoose");

const DB = process.env.DB.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);

const connectDB = async () =>
  mongoose
    .connect(DB)
    .then(() => {
      console.log("Database successfully connected!");
    })
    .catch((err) => {
      console.log("Database failed to connect...");
      console.log(err);
    });

module.exports = connectDB;
