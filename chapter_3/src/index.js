import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './store/store';

import './i18next';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  //   <React.StrictMode>
  // </React.StrictMode>
);

reportWebVitals();
