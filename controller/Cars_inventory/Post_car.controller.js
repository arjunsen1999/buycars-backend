const {
  Marketplace_Inventory_Model,
} = require("../../models/Marketplace_Inventory.model");
const asyncHandler = require("express-async-handler");
const { Cars_inventory_Model } = require("../../models/Cars_inventory.model");
const { validationResult } = require("express-validator");

const Post_car_controller = asyncHandler(async (req, res) => {
  try {
    const {
      KMsOnOdometer,
      MajorScratches,
      image,
      NumberOfAccidents,
      NumberOfPreviousBuyers,
      OriginalPaint,
      OEM_ID,
      RegistrationPlace,
      description,
      title,
    } = req.body;
    const dealerID = req.userID;
    // If any error exists then throw Error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .send({ status: "error", message: errors.array()[0].msg });
    }
    // create marketplace data
    const mp = await Marketplace_Inventory_Model.create({
      KMsOnOdometer,
      MajorScratches,
      NumberOfAccidents,
      NumberOfPreviousBuyers,
      OriginalPaint,
      RegistrationPlace,
    });

    const car = await Cars_inventory_Model.create({
      dealerID,
      image,
      title,
      description,
      OEM_SpecsID: OEM_ID,
      Marketplace_InventoryID: mp._id,
    });

    // Create Response
    const response = {
      status: "success",
      message: "Successfully Added",
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
  Post_car_controller,
};
