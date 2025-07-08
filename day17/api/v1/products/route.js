const express=require("express");
const {updateControllerProduct,createProductController,getAllproducts}=require("./controller.js")
const productrouter=express.Router();  // apirouter is like mini application 

productrouter.get("/",getAllproducts
    // res.json({
    //     isSuccess:true,
    //     message:"Products list fetched",
    //     data:{},
    // });
);

productrouter.post("/",createProductController)
productrouter.patch("/:productId", updateControllerProduct);

module.exports={productrouter};