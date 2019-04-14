import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';

export default function() {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="logo" width="106" height="75" />
      <h1 className="logo-name">React boilerplate</h1>

      <nav>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/about">
          About
        </NavLink>
      </nav>
    </header>
  );
}
