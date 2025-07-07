
console.log("\n----------Start--------\n");
const response1 = fs.readFile("./temp.txt", "utf-8",(err,data)=>{
        if(err){
            console.log("Error reading file: ",err.message);
            return;
        }
        console.log("temp.txt--> ",data);
});
console.log(response1);

console.log("\n-------------MID----------\n");

const response2 = fs.readFile("./student.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading file: ", err.message);
    return;
  }
  console.log("temp.txt--> ", data);
});
console.log(response2);

console.log("\n-------------END----------\n");