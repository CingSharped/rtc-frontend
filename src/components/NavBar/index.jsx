import React from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import './style.css'

const NavBar = () => {
  return (
    <header>
      <nav>
        <div className="nav-links">
          <NavLink className="custom-btn nav-button" to="/">
            Home
          </NavLink>
          <NavLink className="custom-btn nav-button" to="/dashboard">
            Dashboard
          </NavLink>
          <NavLink className="custom-btn nav-button" to="/login">
            Login
          </NavLink>
          <NavLink className="custom-btn nav-button" to="/signup">
            Signup
          </NavLink>
          <NavLink className="custom-btn nav-button" to="/profile">
            Profile
          </NavLink>
          <NavLink className="custom-btn nav-button" to="/cardsearch">
            Card Search
          </NavLink>
          <NavLink className="custom-btn nav-button" to="/support">
            Support
          </NavLink>
          <NavLink className="custom-btn nav-button" to="/about">
            About Us
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </header>
  );
}

export default NavBar