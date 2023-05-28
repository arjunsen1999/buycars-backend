const OEM_SpecsRouter = require("express").Router();
const {
  Post_OEM_SpecsController,
} = require("../controller/OEM_Specs/Post_OEM_Specs.controller");
const {
  Get_OEM_SpecsController,
} = require("../controller/OEM_Specs/Get_OEM_Specs.controller");

OEM_SpecsRouter.route("/")
  .post(Post_OEM_SpecsController)
  .get(Get_OEM_SpecsController);

module.exports = {
  OEM_SpecsRouter,
};
