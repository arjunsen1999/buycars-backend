const mongoose = require("mongoose");

const Cars_inventory_Schema = new mongoose.Schema(
  {
    dealerID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Auth",
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    OEM_SpecsID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "OEM_Spec",
      trim: true,
    },
    Marketplace_InventoryID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Marketplace_Inventory",
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Cars_inventory_Model = mongoose.model(
  "Car_inventory",
  Cars_inventory_Schema
);
module.exports = {
  Cars_inventory_Model,
};
