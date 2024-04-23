const File=require("../model/filemodel");
const cloudinary=require("cloudinary").v2;
exports.localfileUpload=async (req,res)=>{
    try{
        const file=req.files.file;
        console.log("FILE=",file);

        let path=__dirname +"/files/"+ Date.now()+`${file.name.split(".")[1]}`+".jpg";
        file.mv(path,(err)=>{
            console.log(err);
        });
        res.json({
            success:true,
            message:"Local file uploaded successfully"
        })
    }
    catch(err){
        console.log("local File not Uploaded")
        console.log(err);
    }
}
// func to check file is supported or not
function isFileSupported(type,supportedTypes){
    return supportedTypes.includes(type);
}
async function uploadCloudinary(file,folder){
    const options={folder}; 
    return await cloudinary.uploader.upload(file.tempFilePath,options);
}


exports.imageUpload = async (req,res)=>{
    try{
        const {name,tags,email}=req.body;
        console.log(name,tags,email);
        
        const file=req.files.imageFile;
        console.log(file)
        const supportedfiles=["jpg","jpeg","png"];
        const filetype=file.name.split(".")[1].toLowerCase();
        if(!isFileSupported(filetype,supportedfiles)){
            return res.status(404).json({
                success:false,
                message:"File format not Supported"
            })
        }
        //if file format supported
        const response=await uploadCloudinary(file,"files");
        //save to database
        console.log(response)
        // const filedata=await File.create({
        //     name,tags,email,imageURL
        // })
        res.json({
            success:true,
            message:"Image File uploaded successfully!!"
        })
    }
    catch(err){
        console.error(err);
        return res.status(500).json({
            success:false,
            message:"Image not Uploaded"
        })
    }
}
