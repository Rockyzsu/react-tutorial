import React, { useReducer } from 'react';

// 定义初始状态
const initialState = {
  count: 0
};

// 定义reducer函数，它接受当前状态和一个action作为参数，并返回新的状态
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  // 使用useReducer钩子函数，传入reducer函数和初始状态，它会返回当前状态和一个dispatch函数
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};

export default Counter;