const {cfetch}=require("./network-helper");

const getRecepies= async()=>{
    try{
      console.time("getRecepies");
    const response = await cfetch("https://dummyjson.com/recipes");
    const data = await response.json();
    console.log("total receipes -->",data.total);
    }catch(err){
      console.log("-----------------------------------------------------");
      console.log("error occurred while getting receipes --> ",err.message)
      console.log("-----------------------------------------------------");
    }
    console.timeEnd("getRecepies");
};

const getProducts = async () => {
  try {
    console.time("getProducts");
    console.time("getProducts");
    const response = await cfetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log("total Products -->", data.total);
  } catch (err){
    console.log("-----------------------------------------------------");
    console.log("error occurred while getting products --> ", err.message);
    console.log("-----------------------------------------------------");
  }
  console.timeEnd("getProducts");
};
console.time("GEC");

getRecepies();
getProducts();

console.timeEnd("GEC");
