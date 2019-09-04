import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/Home'
import Contact from './pages/Contact'
import Procedures from './pages/Procedures'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/procedures" component={Procedures} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
