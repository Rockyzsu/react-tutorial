import { createStore } from "redux";
const reducer = (state, action) => {
  switch (action.type) {
    case "updateinfo":
      return {
        ...state,
        userinfo: action.payload,
      };
    default:
      return state;
  }
};
const store = createStore(reducer, {
  userinfo: {
    userName: "Austin",
    userAge: 18,
  },
});
export default store;
