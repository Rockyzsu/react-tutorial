import React ,{useState,useEffect}from 'react'

export default function Checkbox(){

  const [checked,setChecked] = useState(false)

  useEffect(()=>{
  alert('HHHH')
  localStorage.setItem('checked',checked);
  }
  )

  useEffect(
    ()=>{
    console.log(`check is ${checked}`)
    }
  )

  return (
<>
  <input
  type="checkbox" value={checked}
  onChange={()=>{
   console.log(checked)
    setChecked((check)=>!checked)
  }}
  />
  {checked ? "checked":"not checked"}
  </>

)

}
