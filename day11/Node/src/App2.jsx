import { useEffect,useRef, useState } from "react";

const App=()=>{
const [timeInSec,setTimeSec]=useState(0); // 0  if you want to store +render on the screen.
const[isTimerRun,setisTimerRun]=useState(true);
// const intervalRef = useRef(null);

// console.log("TimeInSec: ", timeInSec);

// let intervalId=null;  // primitive
// let intervalObj={id:null};  // non-primitive // a1//e2//b2 //d3

    
    useEffect(() => {
      console.log("=======empty===============");

      // intervalRef.current = setInterval(() => {
      //   setTimeSec((prevTime) => {
      //     return prevTime + 1;
      //   });
      // }, 1000);
    }, []);

    useEffect(()=>{
      console.log("Timer running")
    },[isTimerRun]);
  
    const handlePause=()=>{
        // const intervalId=intervalRef.current;
        // console.log(":intervalId: ",intervalObj)
        // clearInterval(intervalObj.id);
        // setisTimerRun(false);
      if(isTimerRun){
        setisTimerRun(true);
      }

    }

    const handlePlay=()=>{
      intervalRef.current = setInterval(() => {
        setTimeSec((prevTime) => {
          return prevTime + 1;
        });
      }, 1000);
      setisTimerRun(true);
    }

    return (
      <div>
        <h2>00:00:{timeInSec}</h2>
        {/* <button onClick={handlePause}>PAUSE</button> */}
        {isTimerRun ? <button onClick={handlePause}>PAUSE</button>: <button onClick={handlePlay}>PLAY</button>}
        
      </div>
    );
};
export default App;