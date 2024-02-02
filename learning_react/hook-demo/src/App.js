import AddColorForm from './form-demo'
import AddColorForm1 from './form-demo-use-state'
import Checkbox from './checkbox'
import MyComponent from './usecallback_demo'
import MyComponent2 from './memo-demo'
function App() {
  return (
    <div className="App">
    <p>Learn React</p>
   <p>example 1 </p>
    <AddColorForm/>
    <p>example 2 </p>
    <AddColorForm1/>
    <Checkbox />
    <MyComponent2 name={"Hello This world"}/>
    </div>

  );
}

export default App;
