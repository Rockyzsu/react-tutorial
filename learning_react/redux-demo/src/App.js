import React, { useState, useEffect } from "react";
import reducer from "./reducer";
// import { createStore } from "react-redux";
import { createStore } from "redux";

// 有报错

const store = createStore(reducer);

function App() {
  console.log('state ',store.getState())
  const [user, setUser] = useState(store.getState().user);
  console.log('user ',user)
  const onUpdate = () => {
    console.log("on click");
    store.dispatch({
      type: "user/update",
      user:'Nihao'} 
    );
  };

  return (
    <div>
      <h1>Hello world</h1>
      <div>名称：{user}</div>
      <div>年龄：{user.userAge}</div>
      <a onClick={onUpdate}>点击更新</a>
    </div>
  );
}



export default App;
