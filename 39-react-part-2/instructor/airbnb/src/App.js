import React from 'react';
import logo from './logo.svg';
import './App.css';
import Listing from './Listing';

const App = () => {
  return (
    <div className="App">
      <Listing title="My Cozy House" description="Clean and modern" views={100} />
      <Listing title="Cute Cottage" description="Cozy and clean" views={50} />
    </div>
  );
}

export default App;
