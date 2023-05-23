import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Style/Header.css';

const Header = () => (
  <nav>
    <div className="logo">
      <img src="" alt="" />
      <h2>Space hub</h2>
    </div>
    <div>
      <NavLink>Rockets</NavLink>
      <NavLink>Missions</NavLink>
      <NavLink>My Profile</NavLink>
    </div>
  </nav>
);

export default Header;
