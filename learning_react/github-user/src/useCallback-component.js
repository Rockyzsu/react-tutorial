import React, { useCallback } from 'react';

export default function Button() {
  const handleClick = useCallback(() => {
    // 处理点击事件的逻辑
    console.log('Button clicked!');
  }, []);

  return (
    <button onClick={handleClick}>Click me</button>
  );
}

