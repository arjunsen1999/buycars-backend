const { OEM_Specs_Model } = require("../../models/OEM_Specs.model");
const asyncHandler = require("express-async-handler");

const Get_OEM_SpecsController = asyncHandler(async (req, res) => {
  try {
    const { search } = req.query;
    const query = {
      $or: [{ Model: { $regex: search, $options: "i" } }],
    };

    const OEM_Specs_Data = await OEM_Specs_Model.find(query).limit(5);

    // Create Response
    const response = {
      status: "success",
      data: OEM_Specs_Data,
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
  Get_OEM_SpecsController,
};
