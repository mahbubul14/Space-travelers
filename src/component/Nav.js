import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './planet.png';

const Nav = () => (
  <nav className="d-flex">
    <div className="d-flex">
      <img className="mr-2 logo" src={logo} alt="space-logo" />
      <h2>Space Travelers &apos; Hub</h2>
    </div>
    <ul className="d-flex">
      <li className="mr-2">
        <NavLink to="/">Rockets</NavLink>
      </li>
      <li className="mr-2">
        <NavLink to="/missions">Missons</NavLink>
      </li>
      <li className="mr-2">
        <NavLink to="/my-profile">My Profile</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
