const express=require("express");
const app=express();

require("dotenv").config();

app.use(express.json());

const PORT=process.env.PORT ||8000;


const fileupload=require("express-fileupload")
app.use(fileupload());

const mydb=require("./config/database");
mydb.connect();

const cloudinary=require("./config/cloudinary");
cloudinary.cloudinaryconnect();

const router=require("./routes/fileroute");
app.use("/api/v1/upload",router);

app.listen(PORT,()=>{
    console.log(`app is running on port ${PORT}`)
})

app.get("/",(req,res)=>{
    res.send("AUR BHAIO KESE HO!!")
})


