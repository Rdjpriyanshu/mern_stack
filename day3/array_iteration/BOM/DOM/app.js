// console.log(window);
// console.log(window.document);
console.dir(window.document);
console.dir(window.document.children[0].children[1].children[0].innerHTML);
 
// -------------------------------------------------
// 1. documnet.getElement_s_ByTagName--> (iterable) (HTML Collection)

const heading=document.getElementsByTagName("h1");
console.log("Headings: ",heading);