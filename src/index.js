import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalState from './GlobalContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalState>
     <React.StrictMode>
    <App />
  </React.StrictMode>
  </GlobalState>
 
);

