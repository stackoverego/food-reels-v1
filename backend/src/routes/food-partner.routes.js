const express=require('express')
const foodMiddleware=require('../middlewares/auth.middleware')
const foodpartnerController=require('../controllers/food-partner.controller')
const router=express.Router();

// api - /api/food-partner/:id
//get method 

router.get('/:id',foodMiddleware.authUserMiddleware,foodpartnerController.getFoodPartnerById);



module.exports=router;