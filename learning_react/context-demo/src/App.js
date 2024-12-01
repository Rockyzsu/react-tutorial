import React, { useContext, useState } from "react";

const divStyleA = {
  width: "150px",
  height: "250px",
  backgroundColor: "lightblue",
};

const divStyleB = {
  width: "150px",
  height: "100px",
  backgroundColor: "red",
};

const divStyleC = {
  width: "150px",
  height: "50px",
  backgroundColor: "green",
};

const divStyleD = {
  width: "150px",
  height: "50px",
  backgroundColor: "pink",
};

const btnStyle = {
  width: "100px",
  height: "20px",
  backgroundColor: "grey",
};

const AppContext = React.createContext({});

function A() {
  return (
    <div className="A" style={divStyleA}>
      A component
      <B></B>
    </div>
  );
}
function B() {
  return (
    <div className="B" style={divStyleB}>
      B component
      <C></C>
      <D></D>
    </div>
  );
}

function C() {
  const appContext = useContext(AppContext);
  const onRemove = () => {
    console.log("remove button");
    if (appContext.roles != "admin") {
      alert("no permission to remove");
    }
  };

  return (
    <>
      <div className="C" style={divStyleC}>
        C component
      </div>
      <button onClick={onRemove} style={btnStyle}>
        Click me
      </button>
    </>
  );
}

//修改数据是失败的
function D(){
  
  const appContext = useContext(AppContext);
  const setPermission = () => {
    console.log("set permission button");
    appContext.setFunc()
    alert('set success!')
    console.log('now value is ',appContext.roles)
  };

  return (
    <>
      <div className="D" style={divStyleD}>
        D component
      </div>
      <button onClick={setPermission} style={btnStyle}>
        Click me
      </button>
    </>
  );
}

function App() {
  const [userRole, setRole] = useState("user");
  return (
    <AppContext.Provider value={{ roles: userRole,setFunc:()=>{
      setRole('admin')
    } }}>
      <A />
    </AppContext.Provider>
  );
}

export default App;
