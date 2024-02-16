import React from "react";
import { useSelector } from "react-redux";

function App() {
  const userInfo = useSelector((state) => state.userInfo);
  return (
    <div className="App">
      <h1>User Info</h1>
      <p>{userInfo.userName}</p>
      <p>{userInfo.userAge}</p>
    </div>
  );
}

export default App;
