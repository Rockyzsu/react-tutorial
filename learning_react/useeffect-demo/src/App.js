import Post from "./PostComponent";
import { useState, useEffect, useLayoutEffect, useReducer } from "react";

function Template() {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("inside useEffect");
  }, [count]);

  return (
    <div>
      <h1>count demo</h1>
      <h3>{count}</h3>
      <button onClick={updateCount}>update count</button>
    </div>
  );
}

function App() {
  const [current, setTime] = useState(0);
  const onClick = () => {
    let now = new Date().getMinutes();
    setTime(now);
  };

  useEffect(() => {
    console.log("useEffect called");
    console.log(current);
  }, [current]);

  return (
    <div className="App">
      <button onClick={onClick}>Update</button>
    </div>
  );
}

function App1() {
  const handleWindowsResize = () => {
    console.log("windows size change");
  };

  useEffect(() => {
    console.log("called");
    const timerObj = setInterval(() => {
      console.log("每秒+1");
    }, 1000);

    window.addEventListener("resize", handleWindowsResize);

    return () => {
      console.log("clear");
      clearInterval(timerObj);
      window.removeEventListener("resize", handleWindowsResize);
    };
  }, []);

  return <div>Hello world</div>;
}

const App12 = () => {
  useEffect(() => {
    const handleClick = () => {
      console.log("Button clicked!");
    };

    // 在组件挂载时，注册点击事件监听器
    document.addEventListener("click", handleClick);

    // 返回一个清理函数，在组件卸载时取消事件监听
    return () => {
      console.log("error");
      return document.removeEventListener("click", handleClick);
    };
  }, []);

  return <div>My Component</div>;
};

function Child() {
  useEffect(() => {
    return () => {
      console.log("组件卸载");
    };
  }, []);

  return <h1>World</h1>;
}

function App13() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <h1>Hello</h1>
      {show ? <Child /> : <></>}
      <button
        onClick={() => {
          setShow(false);
        }}
      >
        Update
      </button>
    </div>
  );
}

function App14() {
  // 第二个参数不能使用引用类型，会导致死循环
  const [userinfo, setUserInfo] = useState({ name: "rocky" });
  const updateFunc = () => {
    console.log("update");
    setUserInfo({ name: "jack" });
  };

  useEffect(() => {
    console.log("update in useeffect");
    setUserInfo({ name: "Leo" });
  }, [userinfo]);

  return (
    <div>
      <h1>Object</h1>
      <h2>{userinfo.name}</h2>
      <button onClick={updateFunc}>Updated</button>
    </div>
  );
}

function App15() {
  // 第二个参数不能使用引用类型，会导致死循环
  const [userinfo, setUserInfo] = useState({ name: "rocky" });
  const updateFunc = () => {
    console.log("update");
    setUserInfo({ name: "jack" });
  };

  useEffect(() => {
    console.log("update in useeffect", userinfo.name);
    setTimeout(() => {
      setUserInfo({ name: "Leo" });
    }, 2000);
  }, [userinfo.name]);

  return (
    <div>
      <h1>Object</h1>
      <h2>{userinfo.name}</h2>
      <button onClick={updateFunc}>Updated</button>
    </div>
  );
}

function App16() {
  const [count, setCount] = useState(0);
  const updateFunc = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log("in effect");
    return () => {
      console.log("in return");
    };
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={updateFunc}>Click me</button>
    </div>
  );
}

// test useLayoutEffect
function ChildCOM() {
  useLayoutEffect(() => {
    return () => {
      console.log("卸载函数");
    };
  }, []);

  return (
    <>
      <div>
        <p>子组件</p>
      </div>
    </>
  );
}

function App17() {
  //
  const [show, setShow] = useState(true);

  const updateFunc = () => {
    setShow(false);
  };
  return (
    <div>
      <h1>useLayoutEffect demo</h1>
      {show ? <ChildCOM></ChildCOM> : <></>}
      <button onClick={updateFunc}>update</button>
    </div>
  );
}

function App18() {
  // 会有闪烁
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(0);
  };

  useEffect(() => {
    console.log("inside useEffect");
    console.log("count is ", count);
    if (count === 0) {
      let randomNum = 10 + Math.random() * 1000;
      setCount(randomNum);
    }
  }, [count]);

  return (
    <div>
      <h1>count demo</h1>
      <h3>{count}</h3>
      <button onClick={updateCount}>update count</button>
    </div>
  );
}

function App19() {
  // 会有闪烁
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(0);
  };

  useLayoutEffect(() => {
    console.log("inside useEffect");
    console.log("count is ", count);
    if (count === 0) {
      let randomNum = 10 + Math.random() * 1000;
      setCount(randomNum);
    }
  }, [count]);

  return (
    <div>
      <h1>count demo</h1>
      <h3>{count}</h3>
      <button onClick={updateCount}>update count</button>
    </div>
  );
}

// useReducer

function fromReducer(state, action) {
  switch (action.type) {
    case "update":
      return { ...state, ...action.data };
    default:
      return state;
  }
}

function App20() {
  const [fromData, dispatch] = useReducer(fromReducer, {
    userName: "",
    userAge: "",
  });

  const updateFunc = () => {
    dispatch({
      type: "update",
      data: {
        userName: "Austin",
        userAge: 19,
      },
    });
  };

  return (
    <div>
      <h1>usereducer demo</h1>
      <h3>UserName: {fromData.userName}</h3>
      <h3>UserAge: {fromData.userAge}</h3>
      <button onClick={updateFunc}>update info</button>
    </div>
  );
}

export default App20;
