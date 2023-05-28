const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const { AuthModel } = require("../models/Auth.model");

const checkIsLoginMiddleware = asyncHandler(async (req, res, next) => {
  try {
    let token = req.headers.token || false;
    // if token is not exists
    
    if (!token) {
      return res
        .status(404)
        .send({ status: "Not found!", message: "you have to login first" });
    }
    // decoded token
    let {userId} = jwt.verify(token, process.env.SECRET_KEY);
    req.userID = userId;
    next();
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
  checkIsLoginMiddleware,
};
