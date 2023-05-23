import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Style/Header.css';
import Logo from '../assets/planet.png';

const Header = () => (
  <nav>
    <div className="logo">
      <img src={Logo} className="logo" alt="" />
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
