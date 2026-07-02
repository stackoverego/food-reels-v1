const mongoose=require("mongoose")

const foodpartnerSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
})

const foodpartnermodel=mongoose.model("foodpartners",foodpartnerSchema);

module.exports=foodpartnermodel;