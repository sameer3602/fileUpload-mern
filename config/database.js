// const mongoose=require("mongoose");
// require("dotenv").config();
// exports.connect= ()=>{
//     mongoose.connect(process.env.DATABASE_URL,{
//         useNewUrlParser:true,
//         useUnifiedTopology:true,
//     })
//     .then(console.log("DATABASE CONNECTION SUCCESSFUL!!"))
//     .catch((err)=>{
//         console.log("DATABASE CONNECTION ISSUES"),
//         console.error(err),
//         process.exit(1)
//     })
// }

const mongoose=require("mongoose")
require("dotenv").config();
exports.connect=()=>{
        mongoose.connect(process.env.DATABASE_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        .then(()=>console.log("DATABASE CONNECTION successful!!"))
        .catch((error)=>{
            console.log(error);
            console.log("Database connection failed");
            process.exit(1);
        })
}   