const mongoose=require("mongoose");

mongoose.connect(process.env.MONGO_URL,
    {
        dbname:"Data1"
    }
).then(()=>{
    console.log("----------------------- DB connected ------------------------------");

}).catch((err)=>{
    console.log("Error occurred");
    console.log("---------------------------       -----------------  -------------------");
    console.log(err.message);
})