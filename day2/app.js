// const pritbill=function(txt){
//     console.log("------------------------");
//     console.log("Rs.",txt);
//     console.log("---------------");

// }

// Arrow fxn.
const printbillFood = (txt) => {
  console.log("------------------------");
  console.log("Your final bill for food: ");
  console.log("Rs.", txt);
  console.log("---------------");
};
const printbillFoodAndDrinks = (txt) => {
  console.log("------------------------");
  console.log("Your final bill for food and drinks: ");
  console.log("Rs.", txt);
  console.log("---------------");
};
const printbillAll = (txt) => {
  console.log("------------------------");
  console.log("Your final bill for all: ");
  console.log("Rs.", txt);
  console.log("---------------");
};

// printbill(100);

// Higher order Function->
// the function which accepts anoter function as a parameter Or return a function.

const calculateBillAmountFood = (price) => {
  return price * 1.05;
};

const calculateBillAmountCloth = (price) => {
  return price * 1.12;
};

const calculateBillAmountDrinks = (price) => {
  return price * 1.2;
};

const totalAmount = (food, cloth, drinks, cb) => {
  const finalamount =
    calculateBillAmountFood(food) +
    calculateBillAmountCloth(cloth) +
    calculateBillAmountDrinks(drinks);
  //   printbill(finalamount);
  cb(finalamount);
};
totalAmount(100, 400, 0, printbillFoodAndDrinks); // printbillAll is a callback
