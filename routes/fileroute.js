const express=require("express")
const router=express.Router();

const {localfileUpload,imageUpload,videoUpload,reduceImageQuality}=require("../controllers/file");

router.post("/fileupload",localfileUpload);
router.post("/imageupload",imageUpload);
router.post("/videoupload",videoUpload);
router.post("/reduceImage",reduceImageQuality);
module.exports=router;