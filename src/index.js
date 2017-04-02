import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import App from './components/Main';
import About from './components/About';
import LayoutWrapper from './components/LayoutWrapper';
import User from './components/User';

const history = createBrowserHistory();

// Render the main component into the dom
ReactDOM.render((
  <Router history={history}>
    <LayoutWrapper>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/user/:userId" component={User}/>
    </LayoutWrapper>
  </Router>
), document.getElementById('app'));
