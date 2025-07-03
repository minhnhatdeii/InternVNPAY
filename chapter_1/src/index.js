import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Clock from './component/Clock';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <Clock />

);

setTimeout(() => {
    root.render(
      <React.StrictMode>
        <div><p>Clock is remove from the DOM.</p></div>
      </React.StrictMode>
    );
}, 5000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
