import GitHubUser from "./fetch-component";
import Button from "./useCallback-component";
function App1() {
  // const userArray = ["rockyzsu", "BruchDone", "holmes1412", "SingleLyra"];
  const userArray = ["rockyzsu"];
  return (
    <>
      {userArray.map((name) => {

        return (
          <>
            <GitHubUser login={"rockyzsu"} />
            <Button />
          </>
        );
      })}
    </>
  );
}

function App() {
  // const userArray = ["rockyzsu", "BruchDone", "holmes1412", "SingleLyra"];
  // const userArray = ["rockyzsu"];
  return (
<>
    <GitHubUser login={"rockyzsu"} />
    <GitHubUser login={"BruceDone"} />
    <GitHubUser login={"holmes1412"} />
    <GitHubUser login={"SingleLyra"} />
          </>

  );
}


export default App;
