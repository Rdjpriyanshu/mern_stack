import { useEffect, useState } from "react";

const App=()=>{
const [timeInSec,setTimeSec]=useState(0); // 0
console.log("TimeInSec: ",timeInSec);
    let id=setInterval(()=>{
        setTimeSec((prevTime)=>{
            return prevTime+1;
        });
    },1000); //-> browser (call this function after every 1 sec )
    // Ok -> and return id:: st1

        console.log("id : ",id);
        console.log("logic... ", id);
    useEffect(()=>{   // useEffect only run on initial render ?? Because dependency array is empty.
       console.log("====================setting interval===============");
        return()=>{  // cleanup function (react will call this function when the component is Unmounting.)
            console.log()
            clearInterval(id);
        };
    },[]);


    return(
        <div>
            <h2>00:00:{timeInSec}</h2>
        </div>
    )
};
export default App;