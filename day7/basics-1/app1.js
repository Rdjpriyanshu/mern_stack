const domRoot=document.getElementById("root");
const reactRoot=ReactDOM.createRoot(domRoot);

const Card = (obj)=>{
    return (
  <div className="card">
    <h1>{obj.title}</h1>
    <p>Description</p>
  </div>
    );
};

const Card1 = (
  <div className="card">
    <h1>--=----DONE---=--</h1>
    <p>Description</p>
  </div>
);

const Card2 = (
  <div className="card">
    <h1>Notification </h1>
    <p>Description</p>
  </div>
);

const container = (
  <div>
    {Card({title:"Hello"})}
     {/* {Card({title:"Notice..."})} */}
     <Card title="Notice" />

    {Card({title:"Warning  !"})}
    {/* {Ca//rd1} */}
    {/* {Card2} */}
    {Card1}
  </div>
);


reactRoot.render(container);
// reactRoot.render(
//   <div>
//     <h1>Hello</h1>
//     <div>
//       <p>Hi</p>
//       <ul>
//         <li>Item1</li>
//         <li>Item2</li>
//       </ul>
//     </div>
//   </div>
// );