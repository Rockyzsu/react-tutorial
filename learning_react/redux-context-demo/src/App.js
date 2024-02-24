import React from 'react';
import {useReduxContext} from 'react-redux';

function App() {
  const { state,dis } = useReduxContext();
  const { userinfo } = state;
  const updateButton = () => {

  };
  return (
    <div className="App">
      <h1>redux demo</h1>
      <div>username: {userinfo.userName}</div>
      <div>userage: {userinfo.userAge}</div>
      <div>
        <button onClick={updateButton}>update info</button>
      </div>
    </div>
  );
}

export default App;
