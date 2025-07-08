require("dotenv").config();

const express=require("express");
const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.json({
        isSuccess:true,
        message:"Server started",
        data:{},
    });
});

app.listen(2900,()=>{
    console.log("------------------- server started-----------------------------");
})