const {Product}=require("../../../models/product_schema.js")


const createProductController=async (req,res)=>{
        try{

        console.log("Creating product..");
        // console.log(req.body);
        const data=req.body;
        console.log("Creating data , ",data);

        let newproduct=null;
        try{
       newproduct=await Product.create(data);

        }catch(err){
                console.log("Error while creating product... ");
                res.status(400);
                res.json({ isSuccess:false,message:`Err: ${err.message}`,data:{}});
                return;
        }

res.status(201);
res.json({
  isSuccess: true,
  message: "Product created",
  data: {
        product:newproduct,
  }
});

        }catch(err){
                console.log("err in createProductController",err.message);
                console.log("---------------------------------------");
              res
                .status(501)
                .json({
                  isSuccess: false,
                  message: "Internal Server error",
                  data: {},
                });
        }

};


const getAllproducts=async(req,res)=>{
        try{
                const allproducts=await Product.find();
res.status(200).json({isSuccess:true,message:"Product list fetched",data:{product:allproducts}})

       }catch(err){
                console.log("Error in getAllProducts -->",err.message);
                res.status(500).json({isSuccess:false,message:"Internal server error"});
        }

};


const updateControllerProduct=async(req,res)=>{
        try{
                const newData=req.body;
                const {productId}=req.params;
                const newProduct=await Product.findByIdAndUpdate(productId,newData,{
                        new:true,
                        runValidators:true,
                });

                if(newProduct===null){
                        res.status(400);
                        res.json({
                                isSuccess:false,
                                message:"Invalid product id",
                                data:{},
                        });
                        return;
                }

                res.status(200).json({
                        isSuccess:true,
                        message:"Product updated",
                        data:{product:newProduct,},
                      
                })

        }catch(err){
                console.log("Error in getAllProducts -->",err.message);
                res.status(501).json({isSuccess:false,message:"Internal Server Error",data:{}});
        }
};


module.exports={updateControllerProduct,createProductController,getAllproducts};