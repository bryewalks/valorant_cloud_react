import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'

import App from './App';

import { GlobalStyle } from 'Components/Globals'

axios.defaults.baseURL = 
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
