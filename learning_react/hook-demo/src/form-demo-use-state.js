
import React,{useState} from 'react'


export default function AddColorForm1(){

  const [txtTitle,setTitle] = useState("");
  const [hexColor,setColor] = useState("#000000");

  const submit = (e)=>{
    e.preventDefault();

    console.log(txtTitle);
    console.log(hexColor);
    setTitle('');
    setTitle('#000000');



  }


  return (

    <form onSubmit={submit}>
    <input text={txtTitle} type="text" placeholder="color form 2 "
    onChange={e=>{setTitle(e.target.value);console.log(e.target.value)}}
    required
    />

    <input text={hexColor} type='color'
    onChange={e=>{setColor(e.target.value);console.log(e.target.value)}}
    required
    />

    <button >Add</button>
    </form>
  )

}
