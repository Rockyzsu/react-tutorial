import React from "react";
import { connect } from "react-redux";

function Counter({ count, increment, descrement }) {
  //   console.log(props);
  //   console.log(props.count)
  console.log("render");
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={descrement}>-</button>
    </div>
  );
}

const mapToProps = (state) => {
  return {
    count: state.count,
  };
};
 
const mapToDispatch = (dispatch) => ({
  increment() {
    dispatch({ type: "increase" });
  },

  descrement() {
    dispatch({ type: "minus" });
  },
});
export default connect(mapToProps,mapToDispatch)(Counter);
