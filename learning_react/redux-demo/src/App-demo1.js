import { createStore } from "redux";
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

function App1() {
  const increase = { type: "increase" };
  const minus = { type: "minus" };
  const store = createStore(reducer);
  console.log(store.getState());
  const add = () => {
    console.log("add");
    store.dispatch(increase);
    console.log(store.getState());
  };
  const minusfunc = () => {
    console.log("minus");
    store.dispatch(minus);
    console.log(store.getState());
  };
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={add}>+</button>
      {/* <span>{count}</span> */}
      <button onClick={minusfunc}>-</button>
    </div>
  );
}

export default App1;
