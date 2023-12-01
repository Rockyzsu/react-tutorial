import React from "react";
import faker from "faker";
import List from './list-component'

const number = 1000;

const bigList = [...Array(number)].map(()=>({
  name:faker.name.findName(),
  email:faker.internet.email(),
  //avatar:faker.internet.avatar()
  avatar:'http://xximg.30daydo.com/webupload/20231110223120.png'
}))



function App() {

  console.log(bigList);
  const renderItem = item=>(
  <div style={{display:"flex"}}>
    <img src={item.avatar} alt={item.name} width={50}/>
    <p>
    {item.name} - {item.email}
    </p>
    </div>
  )
  return (
    <List data={bigList} renderItem={renderItem}/>
   // <p>Hello world</p>
  );
}

export default App;
