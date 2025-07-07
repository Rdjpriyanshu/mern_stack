const fsPromises=require("fs/promises");

const saveObjectToArrayFile=(obj,filePath)=>{
    // check if the file already has array insode it or not
    // --> get the text from the file, convert it into array usinh JSON.parse
    // if the array is not there, put the object in new array, else push the object in the array.
    // then convert the array to JSON and store the file



};

const getObjectFromArrayFromFile=()=>{

    // read the file 
    // try to convert it into JS object using JSON.parse9
    // if there is any error --> file is empty
    //                       --> return empty file
    // id it is able to parse --> return the parsed array

};

const getAllDataFromArrayFromFile = async(filePath)=>{
   try{
const txt= await fsPromises.readFile(filePath,"utf-8");
console.log(tx);
    }catch(err){
        if(err.code)
        console.log(Object.keys(err));
        console.error("Error reading the file",err.code);
        return null;
    }
}



const editObjectFromArrayFile=()=>{
    // read the


};

const deleteObjectFromArrayFromFile=()=>{

};
