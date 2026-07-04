const mongoose=require("mongoose")


const foodSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    video:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    foodpartner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"foodpartners"
    }
    //yaha type me us foodpartner ki id store hogi jisne ye food create kiya hoga
    //ref ka use tab hoga jab hum food ke basis per partner ki details chahiye
})

const foodmodel=mongoose.model("foods",foodSchema)

module.exports=foodmodel;