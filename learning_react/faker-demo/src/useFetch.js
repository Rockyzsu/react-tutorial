import React,{useState,useEffect} from 'react';

export default function useFetch(login){

  const [data,setData] = useState();
  const [error,setError] = useState();
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
 if(!login)return;

    console.log('enter into efffect');
    fetch(`https://api.github.com/users/${login}`).
    then(res =>res.json()).
    then(setData).
    then(()=>setLoading(false)).
    catch((err)=>setError(err))
  },[login])

  return {loading,data,error}

}
