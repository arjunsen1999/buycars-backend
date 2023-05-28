const { AuthModel } = require("../../models/Auth.model");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const saltRounds = 6;
const { validationResult } = require("express-validator");

const SignupController = asyncHandler(async (req, res) => {
  try {
    const { first_name, last_name, role, email, password } = req.body;
    const reqData = {
      first_name,
      last_name,
      email,
      password,
    };
    // if role exists
    if (role) {
      reqData.role = role;
    }

    // If any error exists then throw Error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .send({ status: "error", message: errors.array()[0].msg });
    }

    // Check if user with the same email already exists
    const existingUser = await AuthModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    reqData.password = hashedPassword;

    // Create a new user
    const newUser = new AuthModel(reqData);

    // Save the user to the database
    await newUser.save();

    // Create response
    const response = {
      status: "success",
      message: "Signup successful",
    };
    return res.status(201).json(response);
  } catch (error) {
    // Create error response
    const error_response = {
      status: "fail",
      message: "An error occurred",
    };
    console.log(error);
    return res.status(500).json(error_response);
  }
});

module.exports = {
  SignupController,
};
