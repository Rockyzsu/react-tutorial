// 自定义hook，实际就是一个函数，函数名以use开头，函数内部可以调用其他hook
import { useState, useEffect } from "react";

function useLocalStorage(key, defaultValue) {}

function App() {
  const [state, writeState] = useLocalStorage("app-theme", "");
  const [theme, setTheme] = useState(state);

  const onChangeTheme = (event) => {
    console.log("change theme");
    console.log(event.currentTarget.value);
    
  };

  const saveTheme = () => {
    console.log("save theme");
  };

  const removeTheme = () => {
    console.log("remove theme");
    setTheme(null);
  };

  return (
    <>
      <p>主题：</p>
      <p>
        选择主题：
        <select onChange={onChangeTheme}>
          <option>黑色</option>
          <option>白色</option>
        </select>
      </p>
      <button onClick={saveTheme}>保存主题</button>
      <button onClick={removeTheme}>删除主题</button>
    </>
  );
}

export default App;
