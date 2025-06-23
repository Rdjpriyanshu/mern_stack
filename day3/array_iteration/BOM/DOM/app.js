// console.log(window);
// console.log(window.document);
// console.dir(window.document);
// console.dir(window.document.children[0].children[1].children[0].innerHTML);
 
// -------------------------------------------------
// 1. documnet.getElement_s_ByTagName--> (iterable) (HTML Collection)

// const heading=document.getElementsByTagName("h3");
// console.log("Headings: ",heading);
// const header = document.getElementsByTagName("header");
// console.log("header: ",header);

// heading[0].innerHTML="Hello Priyanshu !";
// heading[1].innerHTML = "Hello Sir !";

// 2. document.getElement_s_ByClassName-->[] (iteratable)

// const element=document.getElementsByClassName("text-brown");
// console.log(element[0].innerHTML);
// console.log(element[1].innerHTML);
// element[0].style.color="green";
// element[1].style.color="green";


// 3. document.getElementById --> element or null

// const text=document.getElementById("text-1");
// text.style.backgroundColor="lime";

// 4. document.querySelectorAll ->[] (HTML collection)

const title=document.querySelectorAll("h3");  // equivalent to d.getElementbyTagName
console.log(title);

const textBrownElements=document.querySelectorAll(".text-brown"); // equivalent to d.getElementByCLassName
console.log(textBrownElements);

const textPara=document.querySelectorAll("#text-1");  // equi to d.getElementById.
console.log(textPara);

// 5. document.querySelector -->element or null
// const title = document.querySelector("h3"); // equivalent to d.getElementbyTagName
// console.log(title);

// const textBrownElements = document.querySelector(".text-brown"); // equivalent to d.getElementByCLassName
// console.log(textBrownElements);

// const textPara = document.querySelector("#text-1"); // equi to d.getElementById.
// console.log(textPara);