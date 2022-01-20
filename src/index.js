import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ResultCont } from './Context/ResultCont';
import App from './App';
import './global.css';

ReactDom.render(
  <ResultCont>
    <Router>
      <App />
    </Router>
  </ResultCont>,
  document.getElementById('root'),
);