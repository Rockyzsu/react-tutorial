import { createStore } from "redux";
import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./Counter";
import { Provider } from "react-redux";

const initState = { count: 0 };

function reducer(state = initState, action) {
  console.log(action);
  switch (action.type) {
    case "increase":
      return { count: state.count + 1 };
    case "minus":
      return { count: state.count - 1 };
    default:
      return state;
  }
}
const store = createStore(reducer); // 放入全局


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Counter />
  </Provider>
);
