import React, { useState } from 'react';

function MyComponent() {
  // 声明一个名为 count 的状态变量，初始值为 0
  const [count, setCount] = useState(0);

  // 在组件中可以使用 count 状态变量和 setCount 更新函数
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
export default MyComponent
