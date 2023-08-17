import React from 'react'
import './App.css';

import Sparkle from './Sparkle'
import Counter from './Counter'

function App() {
  const name = 'Adm'
  const now = String(new Date())


  return (
    <div className="App">

    <p>Hello World , {name} !</p>
    <p>Current time is {now} !</p>
    <Sparkle />
    <Counter />
    </div>
  );
}

export default App;
