const cloudinary=require("cloudinary").v2;

exports.cloudinaryconnect=()=>{
    try{
        cloudinary.config({
            API_KEY:process.env.API_KEY,
            CLOUD_NAME:process.env.CLOUD_NAME,
            API_SECRET:process.env.API_SECRET
        })

    }
    catch(err){
        console.log(err);
    }
}