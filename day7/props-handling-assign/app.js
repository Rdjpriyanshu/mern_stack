// console.log("Hello");
const domRoot=document.getElementById("root");
const root=ReactDOM.createRoot(domRoot);

const arr=[
    {
    name:"Priyanshu",
    score:88,
    },
    {
    name:"Ram",
    score:99,
    },
    {
    name:"Sohan",
    score:38,
    },
    {
    name:"Eklavya",
    score:81,
    },
    {
    name:"Priya",
    score:58,
    },
];

const styleObj={
    color:'purple',
    fontSize:"1.5rem",
    fontWeight:"600",
};

const Card=(props)=>{
    const {name,score}=props;
    return(
        <div className="card">
            <h1 style={{color:"red", fontWeight:"700", fontSize:"3rem"}}>{name}</h1>
            <p style={styleObj}>{score}</p>
        </div>
    )
}


const App=()=>{
    return(
        
        <div className="parent">
            <h1>Hello</h1>

            {/* <Card name={arr[1].name} score={arr[1].score}/> */}
            
            { arr.map((elem)=>{
                    return <Card name={elem.name} score={elem.score} key={elem.name}/>;
                    
                })}
        </div>
    );
};



root.render(App());

// Assignment 