const foodpartnermodel = require("../models/foodpartner.model");
const foodmodel=require("../models/food.model")

async function getFoodPartnerById(req, res) {
  const foodpartnerId = req.params.id;

  const foodpartner = await foodpartnermodel.findById(foodpartnerId);
  const fooditemsbyId=await foodmodel.find({foodpartner:foodpartnerId});
  if (!foodpartner) {
    return res.status(404).json({ message: "food partner not found" });
  }

  res.status(200).json({
    message: "food partner retrieved successfully",
    foodpartner:{
      ...foodpartner.toObject(),
      food:fooditemsbyId
    }
  });
}

module.exports = {
  getFoodPartnerById,
};
