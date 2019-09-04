import React from 'react';
import { Link } from 'react-router-dom'


const Procedures = () => {
  return (
    <>
      <h1>Procedures</h1>
      <p>Here are all of our procedures:</p>

      <ul>
        <li><Link to="/procedures/1">Teeth Cleaning</Link></li>
        <li><Link to="/procedures/2">Cavity Filling</Link></li>
        <li><Link to="/procedures/3">Root Canals</Link></li>
      </ul>
    </>
  );
}

export default Procedures;
