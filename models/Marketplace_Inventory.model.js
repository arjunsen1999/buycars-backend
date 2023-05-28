const mongoose = require("mongoose");
const Marketplace_InventorySchema = new mongoose.Schema(
  {
    KMsOnOdometer: {
      type: String,
      required: true,
    },
    MajorScratches: {
      type: String,
      required: true,
    },
    OriginalPaint: {
      type: String,
      required: true,
    },
    NumberOfAccidents: {
      type: String,
      required: true,
    },
    NumberOfPreviousBuyers: {
      type: String,
      required: true,
    },
    RegistrationPlace: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Marketplace_Inventory_Model = mongoose.model(
  "Marketplace_Inventory",
  Marketplace_InventorySchema
);
module.exports = {
  Marketplace_Inventory_Model,
}
