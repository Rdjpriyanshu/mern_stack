import { useState } from "react";

const App1=()=>{
    const [editIndex,seteditIndex]=useState(-1);
    const [fruit,setfruit]=useState([
    {
        name: "kiwi",
        color: "green",
        price:600,
    },
    {
        name:"Banana",
        color:"yello",
        price:40
    },
    {
        name:"Apple",
        color:"green",
        price:200,
    },
    {
        name:"Mango",
        color:"yello",
        price:100,
    }
]);


return (<div>
    {fruit.map((ele,idx)=>{
if(editIndex==idx){
return(
    <div>
    <h1>Hello</h1>
    </div>
)
else{
        return(
            <div key={idx}>
            <h2>{ele.name}</h2>
            <h3>{ele.color}</h3>
            <h3>{ele.price}</h3>
            <button onClick={()=>{
                seteditIndex(idx);
            }}>Edit</button>
            </div>
    );
}
    })}

        
    
</div>
);
};
export default App1;