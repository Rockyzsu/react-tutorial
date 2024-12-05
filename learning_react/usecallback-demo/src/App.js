import React, { useState, useCallback } from "react";
import MySubComponent from './SubComponent'
const ChildComponent = ({ onClick }) => {
  console.log("ChildComponent rendered");
  return <button onClick={onClick}>Click me</button>;
};

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  // 没有使用useCallback的情况
  // const handleClick = () => {
  //     setCount(count + 1);
  // };
  // 使用useCallback
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};


function App() {
  const myobj = {'name':'haikan'}
  return (
    <>
      <MySubComponent value={myobj}/>
    </>
  );
}

export default App;
