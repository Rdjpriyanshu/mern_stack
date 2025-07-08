const mongooose=require("mongoose");

mongooose.connect(process.env.MONGO_DB_URL,{
    dbName:"day16",
  }
).then(()=>{
    console.log("---------- DB connected -----------------");
}).catch((err)=>{
    console.log("------------ DB connection err -------------");
    console.log(err.message);
});
