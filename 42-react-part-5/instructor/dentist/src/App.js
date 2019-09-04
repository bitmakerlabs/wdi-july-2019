import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Home from './pages/Home'
import Contact from './pages/Contact'
import Procedure from './pages/Procedure'
import Procedures from './pages/Procedures'

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          {/*
            Note the two different types of whitespace
            or you can use the react-add-space package
          */}

          <Link to="/">Home</Link>
          &nbsp;
          <Link to="/procedures">Procedures</Link>
          {' '}
          <Link to="/contact">Contact</Link>
        </nav>

        <Switch>
          <Route path="/procedures/:id" component={Procedure} />
          <Route path="/procedures" component={Procedures} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
