import Post from "./PostComponent";
import { useState, useEffect } from "react";

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



export default App15;
