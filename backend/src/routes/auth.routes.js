const express=require('express')
const authroutes=require('../controllers/auth.controller')
const router=express.Router();

router.post("/user/register",authroutes.registerUser);


module.exports=router;