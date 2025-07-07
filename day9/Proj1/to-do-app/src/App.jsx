import { useState } from "react";

const App=()=>{

  
  const [user,setuser]=useState([]);

  const handleAddUser=(e)=>{
    e.preventDefault();   // do not change on the page.
    //  console.log(e.target[0].value,e.target.name.value);
    //  console.log(e.target[1].value, e.target.city.value);
    
    const name=e.target.name.value;
    const city=e.target.city.value;


    setuser((prev)=>{
      const temp=[...prev];
      temp.push({name,city})
      return temp;
    });
  };


  const handleDelete=(idx)=>{
      setuser((prev)=>{
          const temp=[...prev];
          temp.splice(idx,1);
          return temp;
      })
  }


    return (
      <div>
        <form id="form" onSubmit={handleAddUser}>
          <input type="text" name="name" placeholder="name"></input>
          <input type="text" name="city" placeholder="City"></input>
          <button type="submit">Submit</button>

        </form>{

        <div>
            {user.map((ele,idx)=>{
              return(
                <div>
                <h2>{ele.name}</h2>
                <p>{ele.city}</p>
                <button onClick={()=>{
                  console.log(idx);
                  handleDelete(idx);
                }}>Delete</button>
                </div>
              )
            })}
        </div>
        }
      </div>
    );
}
export default App;
