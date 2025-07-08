const mongoose=require("mongoose");

const {Schema,model}=mongoose;

const productSchema=new Schema({
        title:{
            type:String,
            required:true,
            unique:true,
            trim:true,
        },
        price:{
            type:Number,
            min:0,
            required:true,
        },
        rating:{
            type:Number,
            min:1,
            max:5,
        },
        description:{
            type:String,
            dafault:1,
        },
        images:[string],
        
},{
    versionKey:false,
    timestamps:true,
}
);

const Product = model("Product", productSchema);

module.exports={Product};