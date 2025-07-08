const dotEnv=require("dotenv");
dotEnv.config();
require("./config/db.js");


const express=require("express");
const {Kirana_products}=require("./models/xyzSchema");


const app=express();
app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200);
    res.json({
        isSuccess:true,
        message:"Server is running perfectly*****",
        data:{}
    })
})  

app.get("/api/v1/kiranaProducts",async(req,res)=>{
    
})


app.listen(4141,()=>{
    console.log("------------------Server started-------------------------");
});