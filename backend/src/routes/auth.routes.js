const express=require('express')
const authroutes=require('../controllers/auth.controller')
const router=express.Router();

//user authentication api
router.post("/user/register",authroutes.registerUser);
router.post("/user/login",authroutes.loginUser);
router.get("/user/logout",authroutes.logoutUser);

//food partner authentication api

router.post("/foodpartner/register",authroutes.registerFoodpartner);
router.post("/foodpartner/login",authroutes.loginFoodpartner);
router.get("/foodpartner/logout",authroutes.logoutFoodpartner);




module.exports=router;