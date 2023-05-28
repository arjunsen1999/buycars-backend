const cart_Router = require("express").Router();
const {
  Post_Carts_controller,
} = require("../controller/Cart/Post_cart.controller");
const {
  checkIsLoginMiddleware,
} = require("../middleware/CheckIsLogin.middleware");

const {Get_Carts_controller} = require("../controller/Cart/Get_carts.controller");
const {Delete_Cart_controller} = require("../controller/Cart/Delete_cart.controller");

cart_Router
  .route("/")
  .post(checkIsLoginMiddleware, Post_Carts_controller)
  .get(checkIsLoginMiddleware, Get_Carts_controller);
cart_Router.route("/:id").delete(Delete_Cart_controller);

module.exports = {
  cart_Router,
};
