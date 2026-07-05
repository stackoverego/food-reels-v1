const foodpartnermodel = require("../models/foodpartner.model");
const usermodel=require('../models/user.model');
const jwt = require("jsonwebtoken");

async function authFoodMiddleware(req, res, next) {
  const token = req.cookies.partner_token; //cookies storage se cookies lere he
  if (!token) {
    return res.status(401).json({
      message: "invalid partner. login first.",
    });
  }
  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    const foodpartner = await foodpartnermodel.findById(decoded.id); //only id . not object then id

    req.foodpartner = foodpartner;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "invalid partner.",
    });
  }
}

async function authUserMiddleware(req,res,next) {
  const token =req.cookies.user_token;
  if(!token){
    return res.status(401).json({
      message:"invalid user. please login first."
    })
  }
  try {
    const decoded= await jwt.verify(token,process.env.JWT_SECRET);
    const user=await usermodel.findById(decoded.id);
    req.user=user;
    next();
  } catch (error) {
     return res.status(401).json({
      message: "invalid user.",
    });
  }

}
module.exports = {
  authFoodMiddleware,
  authUserMiddleware
};
