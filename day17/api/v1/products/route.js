const express=require("express");
const {createProductController}=require("./controller.js")
const productrouter=express.Router();  // apirouter is like mini application 

productrouter.get("/",(req,res)=>{
    res.json({
        isSuccess:true,
        message:"Products list fetched",
        data:{},
    });
});

productrouter.post("/",createProductController)

module.exports={productrouter};