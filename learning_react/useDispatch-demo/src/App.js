import { useSelector, useDispatch } from "react-redux";
function App() {
  const userinfo = useSelector((state) => state.userinfo);
  const dispatch = useDispatch();
  const onUpdate = () => {
    console.log("onUpdate");
    dispatch({
      type: "updateinfo",
      payload: {
        userName: "Dog",
        userAge: 9,
      },
    });
  };
  return (
    <div className="App">
      <h1>Data</h1>
      <div>
        用户名：
        <input type="text" value={userinfo.userName} />
      </div>
      <div>
        年龄：
        <input type="text" value={userinfo.userAge} />
      </div>
      <button onClick={onUpdate}>更新</button>
    </div>
  );
}

export default App;
