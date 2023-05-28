const { Cars_inventory_Model } = require("../../models/Cars_inventory.model");
const {
    Marketplace_Inventory_Model,
  } = require("../../models/Marketplace_Inventory.model");

const asyncHandler = require("express-async-handler");

const Update_Cars_inventory_controller = asyncHandler(async (req, res) => {
  try {
    const {
      KMsOnOdometer,
      MajorScratches,
      image,
      NumberOfAccidents,
      NumberOfPreviousBuyers,
      OriginalPaint,
      OEM_SpecsID,
      RegistrationPlace,
      description,
      title,
    } = req.body;
    const _id = req.params.id;
    // check is car exists
    const isCarsExists = await Cars_inventory_Model.findOne({ _id });
    if (!isCarsExists) {
      return res
        .status(404)
        .json({ status: "Not found!", message: "Car data doesn't exists" });
    }
    //////////////////
    const Marketplace_Inventory_ID = isCarsExists.Marketplace_InventoryID;
    const Marketplace_Inventory_data = {
        KMsOnOdometer,
        MajorScratches,
        NumberOfAccidents,
        NumberOfPreviousBuyers,
        OriginalPaint,
        RegistrationPlace,
    }
    for(let key in Marketplace_Inventory_data){
        if(Marketplace_Inventory_data[key] === ""){
            delete Marketplace_Inventory_data[key];
        }
    }
    const update_Marketplace_Inventory = await Marketplace_Inventory_Model.findByIdAndUpdate(
        { _id : Marketplace_Inventory_ID },
        Marketplace_Inventory_data
      );
    //////////////////
    const Cars_inventory_data = {
        title,
        description,
        image,
        OEM_SpecsID
    }
    for(let key in Cars_inventory_data){
        if(Cars_inventory_data[key] === ""){
            delete Cars_inventory_data[key];
        }
    }
    // update data
    const update_car = await Cars_inventory_Model.findByIdAndUpdate(
      { _id },
      Cars_inventory_data
    );
    // Create response
    const response = {
      status: "success",
      message: "Successfully Update",
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
  Update_Cars_inventory_controller,
};
