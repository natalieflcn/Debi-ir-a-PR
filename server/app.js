const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("@exortek/express-mongo-sanitize");
const hpp = require("hpp");
const explorationRouter = require("./routes/explorationRoutes");
const userRouter = require("./routes/userRoutes");
const explorationProgressAdminRouter = require("./routes/explorationProgressAdminRoutes");
const AppError = require("./utils/appError");
const GlobalErrorHandler = require("./controllers/errorController");
const cookieParser = require("cookie-parser");

const app = express();

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message:
    "Too many requests from this IP address. Please try again in an hour! ",
});

const allowedOrigin = process.env.CLIENT_URL || "http://localhost:5173";

app.use(
  cors({
    origin: allowedOrigin,
    credentials: true,
  }),
);

app.use(helmet());

app.use(cookieParser());
app.use("/api", limiter);

app.use(express.json());

app.use(mongoSanitize());

app.use(hpp({ whitelist: [] }));

app.use("/api/v1/explorations", explorationRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/admin-exploration-progress", explorationProgressAdminRouter);

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
