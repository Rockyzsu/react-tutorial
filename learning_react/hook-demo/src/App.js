import './App.css';
import AddColorForm from './form-demo'
import AddColorForm1 from './form-demo-use-state'
import Checkbox from './checkbox'

function App() {
  return (
    <div className="App">
    <p>Learn React</p>
   <p>example 1 </p>
    <AddColorForm/>
    <p>example 2 </p>
    <AddColorForm1/>
    <Checkbox />
    </div>

  );
}

export default App;
