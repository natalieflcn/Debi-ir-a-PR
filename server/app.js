const express = require("express");
const explorationRouter = require("./routes/explorationRoutes");

const app = express();

app.use(express.json());

app.use("/api/v1/explorations", explorationRouter);

module.exports = app;
