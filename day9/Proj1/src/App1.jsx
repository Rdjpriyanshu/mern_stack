import { useState } from "react";

const App = () => {
  const [search, setsearch] = useState(() => {
    const val=localStorage.getItem('seach: ');
    if(val){
        return val;
    }
    else{
        return " ";
    }
    // return "arun";
  });
  console.log(search);

  const handlesearch = (e) => {
    const val=e.target.value;
    localStorage.setItem('search: ',val);
    // console.log(e);
    setsearch(val);
  };

  return (
    <div>
      <input type="text" value={search} onChange={handlesearch}></input>
      <h2>{search}</h2>
    </div>
  );
};
export default App;
