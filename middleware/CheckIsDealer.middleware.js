const asyncHandler = require("express-async-handler");
const { AuthModel } = require("../models/Auth.model");

const checkIsDealerMiddlware = asyncHandler(async (req, res, next) => {
  try {
    const userID = req.userID;
    // Check if is Dealer
    const user = await AuthModel.findOne({_id : userID});
    if(!user){
        return res
        .status(404)
        .json({ status: "Not found!", message: "you have to login first" });
    } 
    if(user.role !== "dealer"){
        return res
        .status(404)
        .json({ status: "Not found!", message: "Opps! you can't access" });
    }
    next()
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
  checkIsDealerMiddlware,
};
