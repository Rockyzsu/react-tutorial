import React,{createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import color from './color-data';
import App from './App';
import reportWebVitals from './reportWebVitals';
export const ColorContext = createContext()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <ColorContext.Provider value = {color}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ColorConxt.Provider>
);

