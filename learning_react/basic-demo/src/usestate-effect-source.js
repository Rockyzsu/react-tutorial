import {useEffect,useState }from 'react'
function WordDisplay(){

const [count,setCount ]=useState(0)
useEffect(()=>{
console.log('console '+ count)
})

return (
  <>
<p onClick={()=>setCount(count+1)}>This is new word {count}</p>
  </>
)

}


export {WordDisplay}
