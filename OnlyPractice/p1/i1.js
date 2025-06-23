// const data = [
//   { name: "Priyanshu", price: 320 },
//   { name: "Ravi", price: 150 },
//   { name: "Neha", price: 230 },
//   { name: "Aman", price: 300 },
// ];
// // const ans=()=>{
// let sum=0;
// data.forEach((val)=>{
//    sum+=val.price;
//     // console.log(val.price);
// });
// console.log(sum);
// };
// ans();

const arr=[

  {id:24,city:"Azamgarh",mobile:8840581370,},
   {id:25,city:"Patna",mobile:9876509388},    

];



// Accessing the value given by user key if not present return undefined.
let search=24;
 const ans=(arr,search)=>{
   let result;
    arr.forEach((val)=>{
        if(val.id==search){
           result=val.city;
        }
    });
return result;
 }
 console.log(ans(arr,search));