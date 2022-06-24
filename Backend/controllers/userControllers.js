const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  // taking the input from the user
  const { name, email, password } = req.body;

  // now check it is in the db or not
  const userExists = await User.findOne({ email });

  // let check now

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  // if not exist that means we have to create new user

  const user = await User.create({
    name,
    email,
    password,
  });
  // if user is created successfully
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Error occurred");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  // taking the input from the user
  const { email, password } = req.body;

  // now check it is in the db or not
  const user = await User.findOne({ email });

  // let check now

  if (user && (await user.matchPassword(password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Either password or Email is incorrect");
  }
});

module.exports = { registerUser, loginUser };
