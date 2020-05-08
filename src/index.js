import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import store from './redux/store.js';

const myRender = () => {
  ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root'));
};

myRender();

store.subscribe(myRender);