import React,{useState} from "react"
import { FaStar } from "react-icons/fa"

const  Star = ({selected = false, onSelect = f=>f })=>{
return  <FaStar color={selected ? "red":"grey"} onClick={onSelect}/>
}

const createArray = (length)=> [...Array(length)];

export default function StarRating({totalStars = 5}){
const [initSelect,setSelect] = useState(0);
  return (
    <>
    {createArray(totalStars).map((n,i)=> (
      <Star
      key={i}
      selected={ initSelect >i }
      onSelect={()=>{setSelect(i+1);console.log('click')}}
      />))
    }

    <p> {initSelect} of {totalStars}  </p>

    </>
    )
}

