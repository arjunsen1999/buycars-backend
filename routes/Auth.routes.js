const authRouter = require("express").Router();
const { body } = require("express-validator");
const { SignupController } = require("../controller/auth/Signup.controller");
const { LoginController } = require("../controller/auth/Login.controller");

authRouter.route("/signup").post(
  [
    body("first_name", "Enter your first name").not().isEmpty(),
    body("last_name", "Enter your last name").not().isEmpty(),
    body("email", "Enter a vaild email").isEmail(),
    body("password", "Password length must be atleast 4").isLength({
      min: 4,
    }),
  ],
  SignupController
);
authRouter.route("/login").post(
  [
    body("email", "Enter a vaild email").isEmail(),
    body("password", "Password length must be atleast 4").isLength({
      min: 4,
    }),
  ],
  LoginController
);

module.exports = {
  authRouter,
};
