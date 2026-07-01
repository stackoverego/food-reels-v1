const express=require('express')
const authroutes=require('../controllers/auth.controller')
const router=express.Router();

router.post("/user/register",authroutes.registerUser);
router.post("/user/login",authroutes.loginUser);
router.get("/user/logout",authroutes.logoutUser);


module.exports=router;