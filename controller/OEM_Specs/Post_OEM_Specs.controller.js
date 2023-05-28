const { OEM_Specs_Model } = require("../../models/OEM_Specs.model");
const asyncHandler = require("express-async-handler");

const Post_OEM_SpecsController = asyncHandler(async (req, res) => {
  try {
    // Insert Data
    const OEM_Data = new OEM_Specs_Model(req.body);

    // Save the data
    await OEM_Data.save();

    // Create Response
    const response = {
      status: "success",
      message: "Data added successfully",
    };

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
  Post_OEM_SpecsController,
};
