import {useState,useMemo,useEffect}from 'react'



function User(){

  const flag = true;
  const wrong_name = "rocky"
  const right_name = 'judy'
  if(flag){
 return (
 <p>Flag is {right_name}</p>
 )

  }else{

 return (
 <p>Oop! Flag is {wrong_name}</p>
 )

  }

}


function Counter(){
const [num,updateNum] = useState(0);
//const fixedNum = useMemo(()=>num.toFixed(2),[num])
const fixedNum = num.toFixed(2); // it was same as below
useEffect(()=>{document.title=`current:${fixedNum}`},[fixedNum])
  return (
    <>
    <p>click below </p>
  <p onClick={()=>updateNum(num+1)}><span>click me ! value: </span><Strong text={fixedNum}/></p>
    </>
  )
}


function Strong({text}){
return (<strong>{text}</strong>)
}

export {User, Counter}
