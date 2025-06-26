import { useState } from "react";

const App=()=>{
    const[arr,setarr]=useState(["kiwi","banana"]);
console.log("New Arr: ",arr);
    const handleAdd=()=>{
        // const temp=[...arr];
        // temp.push("mango");
        //  console.log("Arr: ",temp);
         // use callback.
         setarr((prev)=>{
            const temp=[...prev];
            temp.push("mango");
            console.log(" : temp: ",temp);
            return temp;
         }); 
    }
    return (
      <div>
        <ul>
          {arr.map((ele) => {
            return <li>{ele}</li>;
          })}
        </ul>
        <button onClick={handleAdd}>Add Mango</button>
      </div>
    );
};
export default App;