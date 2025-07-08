const mongoose=require("mongoose");
mongoose.connect(
    process.env.MONGO_DB_URL,{
        dbname:"day17",
    }
).then(()=>{
    console.log("------------------ Database connected-----------------")
}).catch(()=>{
    console.log("------------------- DB connection error-----------------");
    console.log(err.message);
    console.log("----------  -------------  ------------  ---------");
})