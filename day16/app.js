const express=require("express");

require("./config/db");

const {Product}=require("./models/productSchema")

  // this will convey to express to read the body of the request in  the json formate

const app=express();
app.use(express.json()); 

app.get("/", (request,response) => {
    response.status(200);
    response.json({
        // isSuccess:true,
        // message:"",       formate of the json file
        // data:{ }

        isSuccess:true,
        message:"Server is running",
        data:{},
    });
});

app.post("/api/v1/products", async (req,res)=>{
   try{
    const data=req.body;
    const newProduct=await Product.create(data);
    res.status(201);
    res.json({
      isSuccess:true,
      message:"Product created!",
      data:{
        products:newProduct,
      }
    });

   }catch(err){
    console.log("-------------error occured in post products--------");
    console.log(err.message);
    console.log("---------- -------  ----------- -- ---");
    res.status(500);
    res.json({
     isSuccess:false,
      message:"Internal server error",
      data:{
        errMessage:err.message,
      }
    })
   }
});


app.listen(2900,()=>{
  // always 4 digit number

  console.log("-------------Server started--------------");
});  
