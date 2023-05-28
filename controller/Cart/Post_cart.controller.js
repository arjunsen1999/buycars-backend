const { Cart_Model } = require("../../models/Cart.model");
const asyncHandler = require("express-async-handler");

const Post_Carts_controller = asyncHandler(async (req, res) => {
  try {
    const userID = req.userID;
    const { Cars_inventoryID } = req.body;
    const carts = await Cart_Model.create({ userID, Cars_inventoryID });
    // Create Response
    const response = {
      status: "success",
      message: "Add to Cart successfully",
    };
    // Send Response
    return res.status(200).json(response);
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
  Post_Carts_controller,
};
