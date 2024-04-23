const mongoose=require("mongoose")

const fileschema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
    },
    imageURL:{
        type:String,
    },
    tags:{
        type:String,
    }
})
module.exports=mongoose.model("File",fileschema)