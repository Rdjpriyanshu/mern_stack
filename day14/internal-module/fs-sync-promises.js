const fsPromises = require("node:fs/promises");

const main= async ()=>{

    console.log("\n----------Start--------\n");
    try{
    const response1 = await fsPromises.readFile("./temp.txt", "utf-8")
    console.log(response1);
    } catch(err){
        console.log("Cannot open the file temp.txt: ",err.message);
    }

  

    console.log("\n-------------MID----------\n");
try{
    const response2 = await fsPromises.readFile("./student.txt","utf-8")
    console.log(response2);
}catch(err){
    console.log("Cannot open the file student.txt: ", err.message);
}
   

    console.log("\n-------------END----------\n");
}
main();
// seems to working like a Synchronous




