import { createStore } from "redux";

function reducer(state, action) {
  switch (action.type) {
    case "updateInfo":
      return {
        ...state,
        userInfo: action.payload,
      };
    default:
      return state;
  }
}

const store = createStore(reducer, {
  userInfo: {
    userName: "xiaoming",
    userAge: 18,
  },
});
export default store;
