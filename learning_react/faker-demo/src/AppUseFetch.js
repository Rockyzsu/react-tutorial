import React,{useState} from "react";
import GitHubUser from './githubuser'
import SearchForm from './searchform'



function App() {

  const [login,setLogin] = useState('rockyzsu');
  console.log('init login '+ login)
  return (
    <>
   <SearchForm value={login} onSearch={setLogin}/>
    <GitHubUser login={login}/>
    </>
  );
}

export default App;
