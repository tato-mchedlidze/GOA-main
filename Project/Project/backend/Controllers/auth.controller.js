// day166 cw1
// day166 hw2
// day167 hw3
// day167 hw4
// day168 hw2
// day169 cw1

import Users from "../models/users.model.js";
import catchAsync from "../Utils/catchAsync.js";
import AppError from "../Utils/AppError.js";
import { sendEmail } from "../Utils/email.js";

// day168 hw2 - createSendToken
const createSendToken = (user, statusCode, res, options = {}) => {
  const token = user.signToken();

  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
    path: "/",
    maxAge: process.env.COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000,
  };

  user.password = undefined;

  const response = res.cookie("lg", token, cookieOptions);

  if (options.redirectUrl) {
    return response.redirect(
      options.redirectStatus || 302,
      options.redirectUrl,
    );
  }

  return response.status(statusCode).json(user);
};

// day167 hw3 - signUp
export const signUp = catchAsync(async (req, res, next) => {
  const { fullname, email, password } = req.body;

  const newUser = await Users.create({ fullname, email, password });

  const code = newUser.createEmailVerificationToken();
  await newUser.save({ validateBeforeSave: false });

  const url = `${req.protocol}://${req.get("host")}/api/auth/verify/${code}`;
  const html = `<p>Hello ${fullname}, click <a href="${url}">here</a> to verify your email.</p>`;

  try {
    await sendEmail({
      to: newUser.email,
      subject: "Welcome to our phones store - verify your email",
      html,
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.log(err);
  }
});

// day167 hw4 - verify
export const verify = catchAsync(async (req, res, next) => {
  const { code } = req.params;

  const user = await Users.findOne({ verificationCode: code });

  if (!user) {
    return next(new AppError("Invalid or expired verification code", 400));
  }

  user.verificationCode = undefined;
  user.isVerified = true;

  await user.save({ validateBeforeSave: false });

  res.status(200).json("Email verified successfully!");
});

// day168 hw2 - login
export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await Users.findOne({ email }).select("+password");

  if (!user) {
    return next(new AppError("Invalid email or password", 401));
  }

  const isValidPassword = await user.comparePassword(password);

  if (!isValidPassword) {
    return next(new AppError("Invalid email or password", 401));
  }

  createSendToken(user, 200, res);
});

// day169 cw1 - logout
export const logout = catchAsync(async (req, res, next) => {
  res.clearCookie("lg", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
    path: "/",
  });

  res.status(200).send();
});
