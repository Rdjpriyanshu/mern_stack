// re-rendering means, function run again re-run the code again
// react re-renders component Either on "state" change or on "props" change.

// import { useState } from "react";

// // hook ==> functon given to use by react.
// // usestate() return the array.

// const App=()=>{
//   // let search="Arun";
//   const[monitor,remote]=useState();    // remote for changing the value,   monitor for printing or show on the screen.
//   const handle=(e)=>{
//     const val=e.target.value;
//     // search=val;
//     remote(val);
//     console.log(monitor);
//   };
//   return (
// <div>
//   <input type="text" onKeyUp={handle} ></input>
//   <h2>{monitor}</h2>
// </div>
//   );
// };
// export default App;

// import { useState } from "react";

// hook ==> functon given to use by react.
// usestate() return the array.

// const App = () => {
//   // let search="Arun";
//   const [monitor, remote] = useState(() => {
//     const val = localStorage.getItem("counter-value: ");
//     if (val > 0) {
//       return parseInt(val);
//     } else if (val < 0) {
//       return 0;
//     }
//   });

//   console.log(monitor); // remote for changing the value,   monitor for printing or show on the screen.
//   const handle = () => {
//     //  remote(monitor+1);   // hard coded direct monitor is given as a parameter
//     //  remote(monitor + 1);
//     remote((prev) => {
//       const newValue = prev + 1;
//       localStorage.setItem("counter-value: ", newValue);
//       return newValue;
//       // return prev+1;
//     });

//     // remote((prev) => {
//     //   return prev + 1;
//     // });

//     console.log(monitor);
//   };

//   const handle1 = () => {
//     remote((prev) => {
//       const newValue = prev - 1;
//       localStorage.setItem("Counter-value:", newValue);
//       return newValue;
//     });
//   };

//   const handlereset = () => {
//     remote(0);
//     localStorage.setItem("counter-value: ", 0);
//   };

//   return (
//     <div>
//       <button onClick={handle1}>Decrement</button>
//       <button onClick={handle}>Increment</button>
//       <button onClick={handlereset}>Reset</button>
//       <h2>{monitor}</h2>
//     </div>
//   );
// };
// export default App;
