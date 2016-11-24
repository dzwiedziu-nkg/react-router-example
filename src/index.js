import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import App from './components/Main';
import About from './components/About';

// Render the main component into the dom
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
  </Router>
), document.getElementById('app'));
