const { Cars_inventory_Model } = require("../../models/Cars_inventory.model");
const asyncHandler = require("express-async-handler");

const Delete_Cars_inventory_controller = asyncHandler(async (req, res) => {
  try {
    const _id = req.params.id;
    // check is car exists
    const isCarsExists = await Cars_inventory_Model.findOne({ _id });
    if (!isCarsExists) {
      return res
        .status(404)
        .json({ status: "Not found!", message: "Car data doesn't exists" });
    }
    // delete data
    const delete_car = await Cars_inventory_Model.findByIdAndDelete({ _id });
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
  Delete_Cars_inventory_controller,
};
