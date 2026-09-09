const express = require("express");
const explorationRouter = require("./routes/explorationRoutes");
const userRouter = require("./routes/userRoutes");
const AppError = require("./utils/appError");
const GlobalErrorHandler = require("./controllers/errorController");

const app = express();

app.use(express.json());

app.use("/api/v1/explorations", explorationRouter);
app.use("/api/v1/users", userRouter);

app.all("/{*splat}", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(GlobalErrorHandler);

module.exports = app;
