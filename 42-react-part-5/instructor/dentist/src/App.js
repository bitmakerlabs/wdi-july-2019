import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Contact from './pages/Contact'
import Procedures from './pages/Procedures'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/procedures" component={Procedures} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
