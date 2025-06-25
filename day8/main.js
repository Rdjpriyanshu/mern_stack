import React from "react";
import ReactDOM from "react-dom/client";

const domRoot=document.getElementById("root");
const rootEle=ReactDOM.createRoot(domRoot);

const App=()=>{
    console.log("Priyanshu")
    return (
        <div>
            <h1>Hello from React App!</h1>
        </div>
    );
};



rootEle.render(<App/>);