const mongooose=require("mongoose");

mongooose.connect(
  "mongodb+srv://priyanshu_7:password7@cluster0.qxxgepc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    dbName:"day16",

  }
).then(()=>{
    console.log("---------- DB connected -----------------");
}).catch((err)=>{
    console.log("------------ DB connection err -------------");
    console.log(err.message);
});
