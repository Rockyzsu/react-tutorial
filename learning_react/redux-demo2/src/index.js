import { createStore } from "redux";
import React from "react";
import ReactDOM from "react-dom/client";

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
const store = createStore(reducer);
function Counter() {
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={add}>+</button>
      <span>{store.getState().count}</span>
      <button onClick={minusfunc}>-</button>
    </div>
  );
}
const increase = { type: "increase" };
const minus = { type: "minus" };

console.log(store.getState());
const add = () => {
  console.log("add");
  store.dispatch(increase);
  // console.log(store.getState());
};
const minusfunc = () => {
  console.log("minus");
  store.dispatch(minus);
  // console.log(store.getState());
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter />);

store.subscribe(() => {
  console.log(store.getState());
  root.render(<Counter />);
});
