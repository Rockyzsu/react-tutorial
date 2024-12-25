import moment from "moment";
import { FixedSizeList } from "react-window";
import './App.css'
const DateRow = ({ index, style }) => (
  <div className={`aDate ${index % 2 && "aDate-odd"}`} style={style}>
    {moment().add(index, "d").format("dddd,MMMM Do YYYY")}
  </div>
);
function App() {
  return (
    <div className="App">
      <FixedSizeList height={400} itemCount={10000} itemSize={40} width={300}>
        {DateRow}
      </FixedSizeList>
    </div>
  );
}

export default App;
