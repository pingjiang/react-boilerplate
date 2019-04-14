import { hot } from 'react-hot-loader';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './views/common/Nav';
import Home from './views/home/Home';
import About from './views/about/About';
import NotFound from './views/notfound/NotFound';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default hot(module)(App);
