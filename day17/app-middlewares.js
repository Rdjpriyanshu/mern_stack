require("dotenv").config();

const express=require("express");
const app=express();

app.use(express.json());


app.use((req,res,next)=>{
        console.log("------------------------------------");
        console.log(new Date(),req.method,req.url);
        console.log("------------------------------------");
        next();
});

app.get("/",(req,res)=>{
    res.json({
        isSuccess:true,
        message:"Server started",
        data:{},
    });
});



app.get("/hello", (req, res) => {
  res.json({
    isSuccess: true,
    message: "Hi how are you ?",
    data: {},
  });
});

app.use((req, res, next) => {
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!");
  next();
});



app.listen(2900,()=>{
    console.log("------------------- server started-----------------------------");
})