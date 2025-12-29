
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './App';
import { BrowserRouter } from 'react-router-dom';

document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});

document.addEventListener('selectstart', (e) => {
  e.preventDefault();
});

document.addEventListener('dragstart', (e) => {
  e.preventDefault();
});

document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && ['s', 'c', 'a', 'u', 'p'].includes(e.key.toLowerCase())) {
    e.preventDefault();
  }
  if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'i')) {
    e.preventDefault();
  }
});

setInterval(() => {
  debugger;
}, 100);

console.log('%cSTOP!', 'color: red; font-size: 50px; font-weight: bold;');
console.log('%cThis website is protected. Unauthorized copying is not allowed.', 'font-size: 20px; color: #333;');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// reportWebVitals();