const express=require('express');
const foodMiddleware=require('../middlewares/auth.middleware')
const foodController=require('../controllers/food.controller')
const router=express.Router();
const multer=require('multer')

const upload= multer({
    storage:multer.memoryStorage(),
})
// humare pass ek form hoga jaha food partner food reels ke liye name,video,description and  dega so name and description to req.body se mil jayega coz humne express.json() middleware use kiya he but video as file he so vo humara server directly access nhi kar skta he islye we will use package calld multer and fir iska use kar ke hum vo video file ko accept kar payege. 
// upload.single method vo file access kar skti he parameter me hume vo name dena he jo form me file ko accept karne ke liye diga he from frontend.
//  ab file to accept hogi using req.file 

router.post("/",foodMiddleware.authFoodMiddleware,upload.single("video"),foodController.createFood);


module.exports=router