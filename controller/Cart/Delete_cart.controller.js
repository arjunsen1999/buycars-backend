const { Cart_Model } = require("../../models/Cart.model");
const asyncHandler = require("express-async-handler");

const Delete_Cart_controller = asyncHandler(async (req, res) => {
  try {
    const _id = req.params.id;
    // check is cart data exists
    const isCartDataExists = await Cart_Model.findOne({ _id });
    if (!isCartDataExists) {
      return res
        .status(404)
        .json({ status: "Not found!", message: "Cart data doesn't exists" });
    }
    // delete data
    const delete_cart = await Cart_Model.findByIdAndDelete({ _id });
    // Create response
    const response = {
      status: "success",
      message: "Successfully Deleted",
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
  Delete_Cart_controller,
};
