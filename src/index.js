import React from 'react';
import ReactDOM from 'react-dom/client';
import {Resetstyle} from './style';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Resetstyle />
    <App />
  </React.StrictMode>
);

