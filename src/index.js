import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './components/Main';
import About from './components/About';
import LayoutWrapper from './components/LayoutWrapper';
import User from './components/User';

// Render the main component into the dom
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={LayoutWrapper}>
      <IndexRoute component={App}/>
      <Route path="/about" component={About} />
      <Route path="/user/:userId" component={User}/>
    </Route>
  </Router>
), document.getElementById('app'));
