// TODO
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import App from './components/App.jsx';


const comp = function() {
  const element = document.createElement('div');
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
};
document.body.appendChild(comp());


/*
const Comp = props =>
  (
    <h1>DOES WEBPACK WORK WITH REACT?</h1>
  );


ReactDOM.render(<Comp />, document.getElementById('app'));
*/