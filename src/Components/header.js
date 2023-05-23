import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../Style/Header.css';
import Logo from '../assets/planet.png';

const Header = () => (
  <>
    <nav>
      <div className="logo">
        <img src={Logo} className="logo" alt="" />
        <h2>Space hub</h2>
      </div>
      <div>
        <NavLink to="/">Rockets</NavLink>
        <NavLink to="/Missions">Missions</NavLink>
        <div className="nav-separator" />
        <NavLink to="/Profile">My Profile</NavLink>
      </div>
    </nav>
    <Outlet />
  </>
);

export default Header;
