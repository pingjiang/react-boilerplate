import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

export default function() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </header>
  );
}
