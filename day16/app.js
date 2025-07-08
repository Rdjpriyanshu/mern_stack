const dotEnv = require("dotenv");
dotEnv.config()

const express = require("express");

require("./config/db.js");

const { Product } = require("./models/productSchema");

// this will convey to express to read the body of the request in  the json formate

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
  response.status(200);
  response.json({
    isSuccess: true,
    message: "Server is running",
    data: {},
  });
});   // check that server is working or not.

app.get("/api/v1/products", async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.status(200);
    res.json({
      isSuccess: true,
      message: "Products fetched",
      data: {
        products: allProducts,
      },
    });
  } catch (err) {
    console.log("-------------error occured in post products--------");
    console.log(err.message);
    console.log("---------- -------  ----------- -- ---");
  }
});   // 

app.post("/api/v1/products", async (req, res) => {
  try {
    const data = req.body;
    const newProduct = await Product.create(data);
    res.status(201); // status show created
    res.json({
      isSuccess: true,
      message: "Product created!",
      data: {
        products: newProduct,
      },
    });
  } catch (err) {
    console.log("-------------error occured in post products--------");
    console.log(err.message);
    console.log("---------- -------  ----------- -- ---");

    if (err.name == "ValidationError" || err.code == "11000") {
      res.status(400);
      res.json({
        isSuccess: false,
        message: "Client error",
        data: {},
      });
    } else {
      res.status(500);
      res.json({
        isSuccess: false,
        message: "Internal server error",
        data: {
          errMessage: err.message,
        },
      });
    }
  }
});


app.delete("/api/v1/products/:productId",async(req,res)=>{
  try{
  const {productId}=req.params;
  const deleteItem = await Product.findByIdAndDelete(productId);
    res.status(204);
    res.json({
      isSuccess:true,
      message:"Products Deleted",
      data:{
        product:deleteItem
      }
    })
  }catch(err){
    console.log("-------------error occured in post products--------");
    console.log(err.message);
    console.log("---------- -------  ----------- -- ---");
    res.status(500);
    res.json({
      isSuccess: false,
      message: "Internal server error",
      data: {
        errMessage: err.message,
      },
    });

  }
});



app.listen(2900, () => {
  // always 4 digit number

  console.log("-------------Server started--------------");
});
