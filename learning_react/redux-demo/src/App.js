import React, { useState, useEffect } from "react";
import reducer from "./reducer";
import { createStore } from "react-redux";

const store = createStore(reducer);

function App() {
  console.log(store.getState())
  const [user, setUser] = useState(store.getState().user);

  const onUpdate = () => {
    console.log("on click");
    store.dispatch({
      type: "user/update",
      user: {
        userName: "Austin",
        userAge: 18,
      },
    });
  };

  return (
    <div>
      <h1>Hello world</h1>
      <div>名称：{user.userName}</div>
      <div>年龄：{user.userAge}</div>
      <a onClick={onUpdate}>点击更新</a>
    </div>
  );
}



export default App;
