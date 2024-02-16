import { connect } from "react-redux";
import * as counterActions from "./store/actions/counters";
import { bindActionCreators } from "redux";

console.log(counterActions);

function Counter({ count, increment, minus }) {

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={minus}>-</button>
    </div>
  );
}

const mapToProps = (state) => {
  return {
    count: state.count,
  };
};
 
const mapToDispatch = (dispatch) => bindActionCreators(counterActions, dispatch);

export default connect(mapToProps,mapToDispatch)(Counter);
