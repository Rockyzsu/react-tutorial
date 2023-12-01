import React from "react";
import faker from "faker";
//import List from './list-component'
import {FixedSizeList} from 'react-window'

const number = 1000;

const bigList = [...Array(number)].map(()=>({
  name:faker.name.findName(),
  email:faker.internet.email(),
  //avatar:faker.internet.avatar()
  avatar:'http://xximg.30daydo.com/webupload/20231110223120.png'
}))



function App() {
  console.log('call me baby')
  //console.log(bigList);
  const renderRow = ({index,style})=>(
  <div style={{...style,...{display:"flex"}}}>
    <img src={bigList[index].avatar} alt={bigList[index].name} width={50}/>
    <p>
    {bigList[index].name} - {bigList[index].email}
    </p>
    </div>
  )



  return (
 //   <List data={bigList} renderItem={renderItem}/>
   // <p>Hello world</p>
  <FixedSizeList
    height={window.innerHeight}
    width={window.innerWidth -20}
    itemCount = {bigList.length}
    itemSize={50}
    >
    {renderRow}
    </FixedSizeList>
  );
}

export default App;
