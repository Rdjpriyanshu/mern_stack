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
                console.log("err in createProductController");
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

module.exports={createProductController};