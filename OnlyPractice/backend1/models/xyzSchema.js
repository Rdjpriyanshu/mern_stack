const mongoose =require("mongoose");
const {Schema,model}=mongoose;

const kiranaSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  price: Number,
  inStock: Boolean,
  category: String,
  brand: String,
});
const Kirana_products = model("kirana_products", kiranaSchema);
module.exports=Kirana_products;