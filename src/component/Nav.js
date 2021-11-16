import React from 'react';
import { Link } from 'react-router-dom';
import logo from './planet.png';

const Nav = () => (
  <nav>
    <img src={logo} alt="space-logo" />
    <h3>Space Traveler&apos Hub</h3>
    <ul>
      <li>
        <Link to="/">Rockets</Link>
      </li>
      <li>
        <Link to="/missions">Missons</Link>
      </li>
      <li>
        <Link to="/my-profile">My Profile</Link>
      </li>
    </ul>

  </nav>
);

export default Nav;
