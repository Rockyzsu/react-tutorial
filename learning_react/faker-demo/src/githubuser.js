import useFetch from './useFetch'

export default function GithubUser({login}){

  const url = `https://api.github.com/users/${login}`
  const {loading,data,error} = useFetch(login);

  if(loading) return (<h1>loading........</h1>)

  if(error) return (<h1>Error.....</h1>)
  console.log('return')
  return (
  <div>
    <img src={data.avatar_url} style={{width:200}}/>
    <div>
    <h1>{data.login}</h1>
    <p>{data.name}</p>
    <p>{data.location}</p>
    </div>
    </div>
  )

}
