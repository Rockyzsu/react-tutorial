import React, { memo } from 'react';

const MyComponent2 = ({ name }) => {
  console.log('Rendering MyComponent');
  return <div>{name}</div>;
};

export default memo(MyComponent2);