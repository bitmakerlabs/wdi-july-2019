import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './pages/Home'
import Contact from './pages/Contact'
import Procedures from './pages/Procedures'

const App = () => {
  return (
    <div className="App">
      <Home />
      <Procedures />
      <Contact />
    </div>
  );
}

export default App;
