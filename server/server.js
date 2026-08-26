const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const mongoose = require("mongoose");
const app = require("./app");

const DB = process.env.DB.replace("<PASSWORD", process.env.DATABASE_PASSWORD);

mongoose
  .connect(DB)
  .then((con) => {
    console.log("Database successfully connected!");
    console.log(con);
  })
  .catch((err) => {
    console.log("Database failed to connect...");
    console.log(err);
  });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is now running on port ${port}...`);
});
