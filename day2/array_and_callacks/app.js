// const arr1=['tata','mahindra','suzuki','hyundai'];
// const arr2=["kia","byd","mitsubushi"];

// console.log(arr);

//Read the single value.
// 1.
// const company2=arr[1];
// console.log(company2);

//2.
// const[a,b,c]=arr2;
// console.log(a,c)

// const arr = ["tata", "mahindra", "suzuki", "hyundai"];
// arr[10] = "Honda";
// console.log(arr);
// arr.push("Arr");
// arr.pop();
// arr.shift();
// arr.unshift(arr);
// console.log(arr);
// arr.splice(1,2,"Kia","b","","hyundai");
// arr.splice(1,1); // removing new elements
// arr.splice(1,0,"Johndeer");  // adding new elements;
// console.log("arr ",arr);

// find the index of the element which is equal to "suzuki"

// console.log(arr.indexOf("suzuki"));
// console.log(arr.indexOf("sui"));

// 3.
// const arr=[{name:'Priya',city:'Palampur'},
//     {name:'Abhinav',city:'Delhi'},
//     {name:'Suresh',city:'Mumbai'},
// ];
// console.log(arr.indexOf({ name: "Avinav", city: "Delhi" }));
// console.log(arr.indexOf({ name: "Priya", city: "Palarpur" }));
// console.log({ name: "Raj" } == { name: "Raj" });
// const person={name:"Raj"};
// const person2={...person};
// console.log((person2==person));
// console.log({}=={});
// console.log(person==person);

//---------------------------------------------
// const arr = ["ab", "xy", "jhu"];
// if (arr.includes("ab")) {
//   console.log("Present");
// } else {
//   console.log("Absent");
// }
//------------------------------------------------ find
// const myfun=(a,b,c)=>{
//     console.log(a,b,c);
//         if(a=="mn" ) return true;
//         else return false;
// }
// const arr=["ab","xy","mn","ab","pq"];
// const ele=arr.find(myfun);
// console.log(ele)

//----------------------------------------\ findIndex ///  map

const arr=[{name:'Priya',city:'Palampur',score:13},
        {name:'Abhinav',city:'Delhi',score:55},
        {name:'Suresh',city:'Mumbai',score:99}];

//         const myfun=(a)=>{
//             if(a.name==='Abhinav') return true;
//             return false;
//         }

const myfun=(ele)=>{
if(ele.score<33){
    return {...ele,remark:"fail"};
}
else{
    return {...ele,remark:"pass"};
}
};
const resarr=arr.map(myfun);
console.log(resarr);



//         const ele=arr.findIndex(myfun);
//         console.log(ele);



