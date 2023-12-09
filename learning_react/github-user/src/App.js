import GitHubUser from "./fetch-component";
import Button from "./useCallback-component";
function App() {
  return (
    <>
      <GitHubUser login={"rockyzsu"} />
      <GitHubUser login={"BruceDone"} />
      <GitHubUser login={"holmes1412"} />
      <GitHubUser login={"SingleLyra"} />
      <Button />
    </>
  );
}

export default App;
