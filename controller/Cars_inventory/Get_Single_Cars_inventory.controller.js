const { Cars_inventory_Model } = require("../../models/Cars_inventory.model");
const asyncHandler = require("express-async-handler");

const Get_Single_Cars_inventory_controller = asyncHandler(async (req, res) => {
  try {
    const _id = req.params.id;
    // check is car exists
    const car = await Cars_inventory_Model.findOne({ _id }).populate([
      "Marketplace_InventoryID",
      "OEM_SpecsID",
    ]);
    if (!car) {
      return res
        .status(404)
        .json({ status: "Not found!", message: "Car data doesn't exists" });
    }
    // Create Response
    const response = {
      status: "success",
      data: car,
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
  Get_Single_Cars_inventory_controller,
};
