const express = require("express");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const explorationRouter = require("./routes/explorationRoutes");
const userRouter = require("./routes/userRoutes");
const AppError = require("./utils/appError");
const GlobalErrorHandler = require("./controllers/errorController");

const app = express();

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message:
    "Too many requests from this IP address. Please try again in an hour! ",
});

app.use(helmet());

app.use("/api", limiter);

app.use(express.json());

app.use(mongoSanitize());

app.use(hpp({ whitelist: [] }));

app.use("/api/v1/explorations", explorationRouter);
app.use("/api/v1/users", userRouter);

app.all("/{*splat}", (req, res, next) => {
  next(
    new AppError(
      `Can't find ${req.originalUrl} on this server! This route may be undefined...`,
      404,
    ),
  );
});

app.use(GlobalErrorHandler);

module.exports = app;
