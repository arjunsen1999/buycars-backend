const cars_inventory_Router = require("express").Router();
const { body } = require("express-validator");
const {
  checkIsDealerMiddlware,
} = require("../middleware/CheckIsDealer.middleware");
const {
  checkIsLoginMiddleware,
} = require("../middleware/CheckIsLogin.middleware");
const {
  Post_car_controller,
} = require("../controller/Cars_inventory/Post_car.controller");
const {
  Get_Dealer_Cars_inventory_controller,
} = require("../controller/Cars_inventory/Get_Dealer_Cars_inventory.controller");
const {
  Get_All_Cars_inventory_controller,
} = require("../controller/Cars_inventory/Get_All_Cars_inventory.controller");
const {
  Get_Single_Cars_inventory_controller,
} = require("../controller/Cars_inventory/Get_Single_Cars_inventory.controller");
const {
  Delete_Cars_inventory_controller,
} = require("../controller/Cars_inventory/Delete_Cars_inventory.controller");

const {
  Update_Cars_inventory_controller,
} = require("../controller/Cars_inventory/Update_Cars_inventory.controller");

cars_inventory_Router
  .route("/dealer")
  .post(checkIsLoginMiddleware, checkIsDealerMiddlware)
  .get(
    checkIsLoginMiddleware,
    checkIsDealerMiddlware,
    Get_Dealer_Cars_inventory_controller
  );

cars_inventory_Router
  .route("/")
  .get(Get_All_Cars_inventory_controller)
  .post(
    [
      body("image", "Select a image").not().isEmpty(),
      body("KMsOnOdometer", "Enter KMs On Odometer").not().isEmpty(),
      body("MajorScratches", "Enter Major Scratches").not().isEmpty(),
      body("NumberOfAccidents", "Enter Number Of Accidents").not().isEmpty(),
      body("NumberOfPreviousBuyers", "Enter Number Of Previous Buyers")
        .not()
        .isEmpty(),
      body("OEM_ID", "Enter OEM details").not().isEmpty(),
      body("OriginalPaint", "Enter Original Paint").not().isEmpty(),
      body("RegistrationPlace", "Enter Registration Place").not().isEmpty(),
      body("description", "Enter description").not().isEmpty(),
      body("title", "Enter title").not().isEmpty(),
    ],
    checkIsLoginMiddleware,
    checkIsDealerMiddlware,
    Post_car_controller
  );

cars_inventory_Router
  .route("/:id")
  .get(Get_Single_Cars_inventory_controller)
  .patch(checkIsLoginMiddleware, checkIsDealerMiddlware, Update_Cars_inventory_controller)
  .delete(
    checkIsLoginMiddleware,
    checkIsDealerMiddlware,
    Delete_Cars_inventory_controller
  );

module.exports = {
  cars_inventory_Router,
};
