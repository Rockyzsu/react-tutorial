import useOnline from "./checkOnline";
function App() {
  const online = useOnline();
  console.log(online)
  return (
    <div>
      <h1>Network checker ......</h1>
      <span>
        You are now ......
        {online ? <div>ONLINE</div> : <div>OFFLINE</div>}
      </span>
    </div>
  );
}

export default App;
