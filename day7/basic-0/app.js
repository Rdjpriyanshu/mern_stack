// console.log("Hello day 7");

// const rootEle=document.getElementById("root");


// const item1 = document.createElement("li");
// item1.innerText="Item1";
// const item2=document.createElement("li");
// item2.innerText = "Item2";


// const list=document.createElement("ul");
// list.appendChild(item1);
// list.appendChild(item2);

// rootEle.appendChild(list);

// ============================================================4

// react

// const item1=React.createElement("li",{},"Item1");
// console.log("item1:",item1);

// const item2 = React.createElement("li", {}, "Item2");
// console.log("item2:", item2);

// const list = React.createElement("ul", {}, [item1,item2]);

// const rootElem=document.getElementById("parent");
// const reactRoot=ReactDOM.createRoot(rootElem);

// reactRoot.render(list);

// modern react--------------------------------------------------------

// const item1=<li>Item1</li>


// const item2 = <li>Item2</li>


const list = // list is  React element
  (
    <ul>
      <li>Item1</li>
      <li>Item2</li>
    </ul>
  );

const rootElem=document.getElementById("parent");
const reactRoot=ReactDOM.createRoot(rootElem);

reactRoot.render(list);





