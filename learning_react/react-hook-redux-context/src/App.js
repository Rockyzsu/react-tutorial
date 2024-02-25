import {useReduxContext} from 'react-redux';

function App() {
  const { state,disptch } = useReduxContext();
  console.log('state');
  console.log(state);
  const { userinfo } = state;
  // const userinfo = {userName: "xiaoming", userAge: 18};
  const updateButton = () => {
    disptch({
      type:'updateInfo',
      payload:{...userinfo}
    })

  };
  return (
    <div className="App">
      <h1>redux demo</h1>
      <div>username: {userinfo?.userName}</div>
      <div>userage: {userinfo?.userAge}</div>
      <div>
        <button onClick={updateButton}>update info</button>
      </div>
    </div>
  );
}

export default App;
