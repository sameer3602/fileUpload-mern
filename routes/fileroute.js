const express=require("express")
const router=express.Router();

const {localfileUpload,imageUpload}=require("../controllers/file");

router.post("/fileupload",localfileUpload);
router.post("/imageupload",imageUpload);
module.exports=router;