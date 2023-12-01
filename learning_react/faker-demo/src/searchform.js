import {useEffect} from 'react'

export default function SearchForm({login,onSearch}){
let temp;
  const submit = (event)=>{
  event.preventDefault();
  temp = event.target.value;
    //onSearch(event.target.value);
  console.log('login: '+login);

}

//console.log(login)
  useEffect(()=>{
     if(!login)return;
      console.log(login);
      onSearch(login);
    },[login])

  return (

    <form onSubmit={submit}>
    <input type="text"
    value={login}
    onChange={event=>{login = event.target.value}}
    required
    />
    <button>Query</button>
  </form>

)
}
