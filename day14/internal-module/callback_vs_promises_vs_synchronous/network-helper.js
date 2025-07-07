const waitForSomeTime= ()=>{
    new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve();
    },4000);
})
}

const cfetch= async (url)=>{
    // try{

        await waitForSomeTime();
return await fetch(url);
    // const res=await fetch(url);
    // const data= await res.json();
    // return data;
//     }catch(err){
//     console.log("--------------------Error while fetching-----------");
//     console.log(err.message);
//     console.log("---------  -----------  -------------");
// }

};

module.exports={
    cfetch,
}