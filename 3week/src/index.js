import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import App2 from './App2.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <App2 />
  </React.StrictMode>
);

