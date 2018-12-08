import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './App';
import './style.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

render(app, document.getElementById('root'));
registerServiceWorker();