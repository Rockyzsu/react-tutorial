import { useRef, useState, useEffect } from "react";

// ref
function App() {
  const inputRef = useRef(null); //这时的inputRef.current 是null
  console.log("value of inputref ", inputRef);
  const buttonClick = () => {
    console.log(inputRef.current);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={buttonClick}>move focus</button>
    </div>
  );
}

function App6() {
  const [userinfo, setUserinfo] = useState({
    name: "xiaoming",
    age: 18,
  });

  const updateInfo = () => {
    // userinfo.age = 28;
    // setUserinfo(userinfo); // wroing
    setUserinfo({ ...userinfo, age: 28 });
    console.log("userinfo", userinfo);
  };

  return (
    <div>
      <h1>User info </h1>
      <h1>username : {userinfo.name}</h1>
      <h1>user age : {userinfo.age}</h1>
      <button onClick={updateInfo}>updated</button>
    </div>
  );
}

function App7() {
  const [number, setNumber] = useState(0);

  const addNumber = () => {
    setNumber(number + 1);
    setNumber(number + 1);
    console.log("current nubmer :", number);
  };

  return (
    <div>
      <h1>current number:{number}</h1>
      <button onClick={addNumber}>add number 1</button>
    </div>
  );
}

function App8() {
  const [number, setNumber] = useState(0);

  const addNumber = () => {
    setNumber(() => {
      return number + 1;
    });
    setNumber(() => {
      return number + 1;
    });
    console.log("current nubmer :", number);
  };

  return (
    <div>
      <h1>current number:{number}</h1>
      <button onClick={addNumber}>add number 1</button>
    </div>
  );
}

function App9() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect ran");

    return () => {
      console.log("Effect cleanup");
    };
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function Time() {
  console.log("time called");
  const ref = useRef(new Date().getTime());
  ref.current = new Date().getTime();
  console.log(ref.current);
  return <>{ref.current}</>;
}
function App10() {
  const [count, setCount] = useState(0);
  const clickEvent = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <h1>Time component</h1>
      <Time />
      <p></p>
      <button onClick={clickEvent}>Add 1</button>
    </div>
  );
}

function App11() {
  const ref = useRef(0);

  const updateRef = () => {
    console.log(ref.current);
    ref.current++;
  };

  return (
    <div>
      <h1>{ref.current}</h1>
      <button onClick={updateRef}>Update</button>
    </div>
  );
}

function App12() {
  const [count, setCount] = useState(0);
  const ref = useRef(0);
  ref.current++;
  console.log(ref.current);

  const onClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      {/* <h1>COUNT: {count}</h1> */}
      <button onClick={onClick}>update</button>
    </div>
  );
}

function App13() {
  // will raise error
  const [num, setNum] = useState(0);
  return (
    <div>
      <h1>test</h1>
      <p ref={num}>{num}</p>
    </div>
  );
}





////////////////////
export default App13;
