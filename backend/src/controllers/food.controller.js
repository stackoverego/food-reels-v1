

async function createFood(req,res){
    const foodpartner=req.foodpartner;
    console.log(foodpartner)
    res.json({
        message:"food created successfully",
        
    })
}

module.exports={
    createFood
}