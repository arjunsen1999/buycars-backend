const { Cars_inventory_Model } = require("../../models/Cars_inventory.model");
const asyncHandler = require("express-async-handler");

const Get_Dealer_Cars_inventory_controller = asyncHandler(async (req, res) => {
  try {
    const dealerID = req.userID;
    const { page = 1 } = req.query;
    const limit = 5;
    const cars = await Cars_inventory_Model.find({ dealerID })
      .populate(["Marketplace_InventoryID", "OEM_SpecsID"]);
    // Create Response
    const response = {
      status: "success",
      data: cars,
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
  Get_Dealer_Cars_inventory_controller,
};
