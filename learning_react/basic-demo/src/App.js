import { User, Counter } from "./users";
import { WordDisplay } from "./usestate-effect-source";
import ImageTag from "./Image";
import ButtonComponent from "./Button";
function App() {
  return (
    <>
      <User />
      <Counter />
      <WordDisplay />
      <ImageTag />
      <ButtonComponent/>
      
    </>
  );
}

export default App;
