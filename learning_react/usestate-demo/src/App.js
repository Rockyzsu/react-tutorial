import { useEffect, useState } from "react";
let start = 0;
function App() {
  console.log("App");

  const [state_value, setState] = useState(start);
  console.log("current state_value is ", state_value);

  const change_text = () => {
    setState((v) => v + 1);
    // start += 1;
    // console.log(state_value);
  };

  // useEffect(()=>{

  // },[])

  return (
    <div>
      Use state demo
      <h1>
        <span>{state_value}</span>
      </h1>
      <button onClick={change_text}>change text</button>
    </div>
  );
}

export default App;
