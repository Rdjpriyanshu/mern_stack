import { useState } from "react";

const SearchBox=()=>{
// let search="Anuj";
const [monitor,remote]=useState();

    const handle=(e)=>{
        // console.log(e.target.value);
        // search=e.target.value;
        remote(e.target.value)     // Noted !
        console.log(monitor)
        
    }
    return (
        <div>
            <input type="text" onKeyUp={handle} placeholder="name"></input>
            <h3>{monitor}</h3>
        </div>
    )
};
export {SearchBox};