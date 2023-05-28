const mongoose = require("mongoose");

const Cart_Schema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Auth",
      trim: true,
    },
    Cars_inventoryID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Car_inventory",
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Cart_Model = mongoose.model("Cart", Cart_Schema);
module.exports = {
  Cart_Model,
};
