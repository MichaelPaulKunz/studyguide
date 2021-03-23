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


/**
 *    npx create-react-app mvp
 *
 *    npx: installed 67 in 7.095s
      The directory mvp contains files that could conflict:

      package.json

      Either try using a new directory name, or remove the files listed above.
 */