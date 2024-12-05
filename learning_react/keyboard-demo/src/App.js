import "./App.css";
import { useState, useCallback } from "react";

const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const ESCAPE = 27;

function App() {
  const [angle, setAngle] = useState(0);
  const [lastKey, setLastKey] = useState("");
  const handleKeyDown = useCallback(
    (event) => {
      console.log("Key Down", event.keyCode);
      if (event.keyCode == LEFT_ARROW) {
        setAngle((x) => Math.max(-360, x - 5));
        setLastKey("Left");
      } else if (event.keyCode == RIGHT_ARROW) {
        setAngle((x) => Math.min(360, x + 5));

        setLastKey("Right");
      } else if (event.keyCode == ESCAPE) {
        setAngle(0);
        setLastKey("Escape");
      }
    },
    [setAngle]
  );

  document.addEventListener("keydown", handleKeyDown, true);
  return (
    <div className="App">
      <p>
        Angle {angle} Last Key {lastKey}
      </p>
      <svg width="400px" height="400px" title="arrow" fill="none" stroke="black" strokeWidth="10" style={{ transform: `rotate(${angle}deg)` }}>
        <polyline points="100,200 200,0 300,200" />
        <polyline points="200,0 200,400" />
      </svg>
      <input type="text" />
      <button>Submit</button>
    </div>
  );
}

export default App;
