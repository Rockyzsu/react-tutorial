import { createStore } from "redux";
const initState = { userInfo: {
    userName: "Austin",
    userAge: 18,
  }
}
const reducer = (state=initState, action) => {
  return state;
};

const store = createStore(reducer);

export default store;
