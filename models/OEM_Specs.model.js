const mongoose = require("mongoose");

const OEM_Specs_Schema = new mongoose.Schema(
  {
    Model: {
      type: String,
      required: true,
    },
    Year: {
      type: Number,
      required: true,
    },
    ListPrice: {
      type: String,
      required: true,
    },
    Colors: {
      type: [String],
      required: true,
    },
    Mileage: {
      type: String,
      required: true,
    },
    Power: {
      type: Number,
      required: true,
    },
    MaxSpeed: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const OEM_Specs_Model = mongoose.model("OEM_Spec", OEM_Specs_Schema);
module.exports = {
  OEM_Specs_Model,
}
