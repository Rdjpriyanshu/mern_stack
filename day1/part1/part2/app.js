// let juice=30;
// let gstOnjuice=0.1;
// let fries=50;
// let gstOnfries=0.05;

// console.log(juice + juice * gstOnjuice + fries + gstOnfries);

// ......................................... Function ..........
// let age = 22;
// console.log("START", age);
// // function declaration.
// function calculateBill(juice, gst) {
//   // parameter
//   console.log(juice + juice * gst); 
// }
// console.log("MID");
// calculateBill(44, 0.5); // function invocation;
// console.log("END");
//.............................


// Functions are first call citizen  in javascript.

//3. function annonymous function
const printbill = function (name, amount) {
  console.log("Your order: ", name);
  console.log("Bill is: Rs", amount);
};
// console.log(typeof(printbill))




//2. function assignment (named function)
// const printbill=function printbill(name,amount){
//     console.log("Your order: ",name);
//     console.log("Bill is: Rs",amount);
// // }
// function printbill(name, amount) {
//   console.log("Your order: ", name);
//   console.log("Bill is: $", amount);wa
// }

function calculateBill(price,gst){
    console.log("calculating......");
    let total=price+price*gst;
    return total;
}
const res1 = calculateBill(20, 0.5);
printbill("Mango juice ", res1);

