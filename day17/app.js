require("dotenv").config();
require("./config/db.js")
const express=require("express");
const app=express();

const {apirouter}=require("./api/v1/routes.js");

app.use(express.json());

app.use((req, res, next) => {
  console.log("------------------------------------");
  console.log(new Date(), req.method, req.url);
  console.log("------------------------------------");
  next();
});


app.use("/api/v1",apirouter);


app.listen(2900,()=>{
    console.log("------------------- server started-----------------------------");
})