const storageservice=require('../services/storage.service')
const {v4:uuid}=require('uuid')
const foodmodel=require('../models/food.model')

async function createFood(req,res){
    const fileuploadedresult= await storageservice.FileUpload(req.file.buffer,uuid());
    
    const fooditem=foodmodel.create({
        name:req.body.name,
        video:fileuploadedresult.url,
        description:req.body.description,
        foodpartner:req.foodpartner.id
    })

    res.status(201).json({
        Message:"food created successfully",
    })
}

module.exports={
    createFood
}