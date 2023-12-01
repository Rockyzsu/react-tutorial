import React,{useEffect, useState} from 'react'

const loadJson = (key)=> key && JSON.parse(localStorage.getItem(key))

const saveJson = (key,data) => localStorage.setItem(key,JSON.stringify(data))

export default function GitHubUser({login}){

  const [data,setData]=useState(loadJson(`user:${login}`));

  useEffect(()=>{

    console.log(`data --- ${data}`)
    if(!data)return;
    if(data.login==login)return;
    console.log('data 变化');
    console.log(`data is ${data}` )
    const {name,avatar_url,location} =data
    saveJson(`user:${login}`,{
      name,login,avatar_url,location
    })
  },
  [data])


  useEffect(()=>{
    console.log(`login --- ${login}`)
    if(!login) return;

    if(data&&data.login==login) return
    console.log(`login 变化 : ${login}` );

    fetch(`https://api.github.com/users/${login}`)
    .then(res=>{console.log('fetch data');return res.json()})
    .then(setData)
    .catch(console.error)

  },[login])




  if(data){
    return <pre>{JSON.stringify(data,null,2)}</pre>
  }


  return null;
}
