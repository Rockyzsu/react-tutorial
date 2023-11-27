import React from 'react';
import ReactDOM from 'react-dom';
//import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import StarRating from './Star'
import MyComponent from './use_state'
//const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
  <StarRating />
  <MyComponent />
  </React.StrictMode>,
  document.getElementById('root')

);

