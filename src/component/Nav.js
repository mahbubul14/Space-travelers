import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './planet.png';

const Nav = () => (
  <nav>
    <img src={logo} alt="space-logo" />
    <h2>Space Travelers &apos; Hub</h2>
    <ul>
      <li>
        <NavLink to="/">Rockets</NavLink>
      </li>
      <li>
        <NavLink to="/missions">Missons</NavLink>
      </li>
      <li>
        <NavLink to="/my-profile">My Profile</NavLink>
      </li>
    </ul>

  </nav>
);

export default Nav;
