const express=require("express");
const {productrouter}=require("./products/route.js")
const apirouter=express.Router();  // apirouter is like mini application 

apirouter.use("/products", productrouter);


module.exports={apirouter};