import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

//* context
import AlertState from './contexts/alert/AlertState'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AlertState>
      <App />
    </AlertState>
  </BrowserRouter>
);