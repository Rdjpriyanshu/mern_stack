// const cse865={
//     name:"Raj",
//     address:"Uttar Pradesh",
//     bloodGroup:"B+"
        // groupInto:()=>{
            // }
// };
// console.log(cse865);



const cse23={
  name:"Priya",
  height:1.78,
  weight:45,
  calculatebmi:()=>{

  }
};
console.log(cse23);


// const cse965 = {
//   name: "Aman",
//   address: "Bihar",
//   bloodGroup: "AB+",
// };
// console.log(cse965);

//--------------------------------------------------------------------------\
// Read the value
// const studName = cse965.name;
// console.log("StudName: ", studName);
// // Add Key value pair
// cse965.college = "LPU";

// console.log("CSE965: ", cse965);
// delete cse965.address;
// console.log("CSE965: ",cse965);


// const device={
//     name:"LD",
//     type:"LAPTOP",
//     year:"2022",
//     company:"Apple",
// }

// const temp=device;
// console.log(temp);

//2 -------------------------------------------------------------------------------------

// const person={
//     name:'Priyanshu',
//     height:1.71 ,
//     weight:66,
//     college:'LPU',
//     rollNumber:65,
//     getBMI:function() {
//         console.log(`BMI for ${this.name} is: `);
//         const bmi=(this.weight / (this.height)**2);
//         console.log(bmi);
//         if(bmi>26){
//             console.log("Obese");
//         }
//         else if(bmi<24 && bmi>18){
//             console.log("Normal");
//         }
//         else if(bmi<18){
//             console.log("UnderWeight");
//         }
//     }
// }
// person.getBMI();
// person.weight=90;
// person.getBMI();
// person.weight=25;
// person.getBMI();


// const allKeys=Object.keys(person);
// console.log("All Keys: ",allKeys);
// const allValues=Object.values(person);
// console.log("allVAlues: ",allValues);
// const allEntries=Object.entries(person);
// console.log("All Entries: ",allEntries);

//3 ------------------------------------------------------------------------------------

// const person={
//     name:'Priyanshu',
//     height:1.71 ,
//     weight:66,
//     college:'LPU',
//     rollNumber:65,
// };
// to read

// const colg=person.college;
// console.log(colg);

// dynamically  value read 
// const whichkey=prompt("What you want to print");
// console.log(":,whichkey: ",whichkey);
// const clg=person[whichkey];
// console.log(clg);
 
//4 -------------------------------------------------------Shallow copy
// const person1 = {
//   name: "Priyanshu",
//   height: 1.71,
//   weight: 66,
//   college: "LPU",
//   rollNumber: 65,
// };
// const person2=person1;
// person2.name="Raj";
// console.log("person1: ",person1);
// console.log("person2: ", person2);

// 5. De-structuring 
// const person1 = {
//       name: "Priyanshu",
//       height: 1.71,
//       weight: 66,
//       college: "LPU",
//       rollNumber: 65,
//       marks:{
//         maths:25,
//         EVS:42,
//       },
//     };
// const {name,weight}=person1;
// console.log("name,weight ",name,weight);

// const person2={...person1};
// person2.name="John";
// person2.marks.maths=78;
// console.log(person1);
// console.log(person2);