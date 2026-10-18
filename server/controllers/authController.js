const User = require("../models/User");
const catchAsync = require("../utils/catchAsync");
const jwt = require("jsonwebtoken");
const AppError = require("../utils/appError");
const { promisify } = require("util");
const sendEmail = require("../utils/email");
const crypto = require("crypto");
const { capitalize } = require("../utils/helpers");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000,
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  };

  // if (process.env.NODE_ENV === "production") cookieOptions.secure = true;
  cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);

  user.password = undefined;

  res.status(statusCode).json({ status: "success", token, data: { user } });
};

exports.signupExplorer = catchAsync(async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
      role: "explorer",
    });

    await sendEmail({
      email: req.body.email,
      subject: "Welcome to Debí ir a Puerto Rico!",
      message: `Welcome, ${newUser.name.split(" ")[0]}!

Thanks for joining. Your account is ready to go. You can now browse explorations, visit locations around the island, and track your progress as you go.

Start Exploring: ${process.env.CLIENT_URL}/explorations

You're receiving this email because someone created an account with this address. If that wasn't you, you can ignore this message.`,
      html: `<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Welcome aboard!</title>
  </head>
  <body style="margin:0;padding:0;background:#428fc1;">
    <!-- Preheader: the preview text shown in the inbox list -->
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
      Your account is ready. Here's how to get started.
    </div>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#428fc1;padding:24px 12px;">
      <tr><td align="center">
        <table role="presentation" width="480" cellpadding="0" cellspacing="0" style="width:100%;max-width:480px;background:#ffffff;border-radius:5px;font-family:Arial,Helvetica,sans-serif;color:#222222;">
          <tr><td style="padding:32px;">

            <h1 style="margin:0 0 16px;font-size:24px;color:#ed333c;">
              Welcome, ${capitalize(newUser.name.split(" ")[0])}!
            </h1>

            <p style="margin:0 0 16px;font-size:16px;line-height:1.5;">
              Thanks for joining. Your account is ready to go. 
            </p>
            <p style="margin:0 0 16px;font-size:16px;line-height:1.5;">You can now browse explorations, visit locations around the island, and track your progress as you go.</p>

            <p style="margin:24px 0;">
              <a href="${process.env.CLIENT_URL}/explorations" style="display:inline-block;background:#ed333c;color:#ffffff;padding:12px 24px;border-radius:6px;text-decoration:none;font-weight:bold;">START EXPLORING</a>
            </p>

            <p style="margin:0 0 8px;font-size:14px;line-height:1.5;color:#404449;">
              Button not working? Copy and paste this link into your browser:
            </p>
            <p style="margin:0 0 24px;font-size:13px;word-break:break-all;">
              <a href="${process.env.CLIENT_URL}/explorations" style="color:#428fc1;">${process.env.CLIENT_URL}/explorations</a>
            </p>

            <hr style="border:none;border-top:1px solid #e5e5e5;margin:0 0 16px;" />

            <p style="margin:0;font-size:13px;line-height:1.5;color:#404449;">
              You're receiving this email because someone created an account with this address. If that wasn't you, you can ignore this message.
            </p>

          </td></tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>`,
    });

    createSendToken(newUser, 201, res);
  } catch (err) {
    return next(
      new AppError(
        `There was an error creating this user. ${err.message}`,
        400,
      ),
    );
  }
});

exports.signupAmbassador = catchAsync(async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
      role: "ambassador",
    });

    await sendEmail({
      email: req.body.email,
      subject: "Welcome to Debí ir a Puerto Rico!",
      message: `Welcome, ${capitalize(newUser.name.split(" ")[0])}!

Thanks for joining. Your account is ready to go. You can now create explorations and add locations that help others discover Puerto Rico.

Start Creating: ${process.env.CLIENT_URL}/ambassador/explorations

You're receiving this email because someone created an account with this address. If that wasn't you, you can ignore this message.`,
      html: `<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Welcome aboard!</title>
  </head>
  <body style="margin:0;padding:0;background:#ed333c;">
    <!-- Preheader: the preview text shown in the inbox list -->
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
      Your account is ready. Here's how to get started.
    </div>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ed333c;padding:24px 12px;">
      <tr><td align="center">
        <table role="presentation" width="480" cellpadding="0" cellspacing="0" style="width:100%;max-width:480px;background:#ffffff;border-radius:5px;font-family:Arial,Helvetica,sans-serif;color:#222222;">
          <tr><td style="padding:32px;">

            <h1 style="margin:0 0 16px;font-size:24px;color:#428fc1;">
              Welcome, ${capitalize(newUser.name.split(" ")[0])}!
            </h1>

            <p style="margin:0 0 16px;font-size:16px;line-height:1.5;">
              Thanks for joining. Your account is ready to go. 
            </p>
            <p style="margin:0 0 16px;font-size:16px;line-height:1.5;">You can now create explorations and add locations that help others discover Puerto Rico.</p>

            <p style="margin:24px 0;">
              <a href="${process.env.CLIENT_URL}/ambassador/explorations" style="display:inline-block;background:#428fc1;color:#ffffff;padding:12px 24px;border-radius:6px;text-decoration:none;font-weight:bold;">START CREATING</a>
            </p>

            <p style="margin:0 0 8px;font-size:14px;line-height:1.5;color:#404449;">
              Button not working? Copy and paste this link into your browser:
            </p>
            <p style="margin:0 0 24px;font-size:13px;word-break:break-all;">
              <a href="${process.env.CLIENT_URL}/ambassador/explorations" style="color:#ed333c;">${process.env.CLIENT_URL}/ambassador/explorations</a>
            </p>

            <hr style="border:none;border-top:1px solid #e5e5e5;margin:0 0 16px;" />

            <p style="margin:0;font-size:13px;line-height:1.5;color:#404449;">
              You're receiving this email because someone created an account with this address. If that wasn't you, you can ignore this message.
            </p>

          </td></tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>`,
    });

    createSendToken(newUser, 201, res);
  } catch (err) {
    return next(
      new AppError(
        `There was an error creating this user. ${err.message}`,
        400,
      ),
    );
  }
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // Check if email and password exist
  if (!email || !password)
    return next(new AppError("Please provide email and password.", 400));

  // Check if user exists and password is valid
  const user = await User.findOne({ email }).select("+password");
  if (!user || !(await user.correctPassword(password, user.password)))
    return next(
      new AppError("Incorrect email or password. Please try again.", 401),
    );

  // If valid, send JWT to user
  createSendToken(user, 200, res);
});

exports.logout = catchAsync(async (req, res, next) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  });
  res.json({ message: "Logged out user." });
});

exports.protect = catchAsync(async (req, res, next) => {
  // Checking if token exists
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token)
    return next(
      new AppError("You are not logged in. Please login to get access.", 401),
    );

  // JWT Verification of token
  const decodedJWT = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // Re-verify if user still exists
  const freshUser = await User.findById(decodedJWT.id);

  if (!freshUser) {
    return next(
      new AppError(
        "The user registered under this token no longer exists. Please try logging in again.",
        401,
      ),
    );
  }

  // Re-verify if user hasn't changed password after JWT issue
  if (freshUser.isPasswordChanged(decodedJWT.iat))
    return next(
      new AppError("User recently changed password. Please login again.", 401),
    );

  req.user = freshUser;

  next();
});

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role))
      return next(
        new AppError("You do not have permission to perform this action.", 403),
      );

    next();
  };
};

exports.forgotPassword = catchAsync(async (req, res, next) => {
  // Get user based on POSTed email

  const user = await User.findOne({ email: req.body.email });
  if (!user)
    return next(
      new AppError("There is no user associated with this email address.", 404),
    );

  // Generate random token
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  // Send token to user's email
  const resetURL = `${req.protocol}://${req.get("host")}/api/v1/users/resetPassword/${resetToken}`;

  const message = `Hey ${user.name.split(" ")[0]}, we received a request to reset your password! This link expires in 10 minutes. Please visit ${process.env.CLIENT_URL}/reset-password/${resetToken} to reset your password. If you didn't request this password reset, please ignore this email.`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Reset Your Password (Valid for the next 10 minutes)",
      message,
      html: `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#428fc1;padding:24px;">
      <tr><td align="center">
        <table role="presentation" width="480" cellpadding="0" cellspacing="0" style="background:#fffbf0;border-radius:5px;padding:32px;font-family:Helvetica,sans-serif;color:#191d23;">
          <tr><td>
            <h1 style="margin:0 0 16px;font-size:22px;font-family:Helvetica">Reset Your Password</h1>
            <p>Hey ${user.name.split(" ")[0]}, we received a request to reset your password! This link expires in 10 minutes.</p>
            <p style="margin:24px 0;">
              <a href="${process.env.CLIENT_URL}/reset-password/${resetToken}" style="background:#ed333c;color:#ffffff;padding:12px 24px;border-radius:6px;text-decoration:none;font-weight:bold;">Reset Password</a>
            </p>
            <p style="font-size:13px;color:#404449;">If you didn't request this password reset, please ignore this email.</p>
          </td></tr>
        </table>
      </td></tr>
    </table>`,
    });

    res
      .status(200)
      .json({ status: "success", message: "Reset token sent to email!" });
  } catch (err) {
    // console.log(err);

    user.passwordResetToken = undefined;
    user.passwordResetTokenExpires = undefined;
    user.save({ validateBeforeSave: false });
    console.log(err);
    return next(
      new AppError(
        "There was an error sending the email. Please try again!",
        500,
      ),
    );
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  // Get user based on token
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetTokenExpires: { $gt: Date.now() },
  });

  // If token has not expired and user exists, set new password
  if (!user)
    return next(new AppError("Reset token is invalid or has expired.", 400));

  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetTokenExpires = undefined;
  await user.save();

  // Send JWT back to client
  createSendToken(user, 200, res);
});

exports.updateMyPassword = catchAsync(async (req, res, next) => {
  // Get user from collection
  const user = await User.findById(req.user.id);

  // Update password
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();

  // Send JWT back to client
  createSendToken(user, 200, res);
});

exports.updateUserPassword = catchAsync(async (req, res, next) => {
  // Get user from collection
  const user = await User.findById(req.params.id);

  // Update password
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();

  // Send JWT back to client
  res.status(200).json({ status: "success", data: { data: user } });
});
