const express=require('express');
const foodMiddleware=require('../middlewares/auth.middleware')
const foodController=require('../controllers/food.controller')
const router=express.Router();


router.post("/",foodMiddleware.authFoodMiddleware,foodController.createFood);


module.exports=router