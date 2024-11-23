import React from 'react';
import ReactDOM from 'react-dom/client'; // react-dom/client modülünden import yapın
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// React 18 ile gelen yeni yöntem
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
