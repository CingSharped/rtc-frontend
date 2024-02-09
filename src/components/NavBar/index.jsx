import React from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import './style.css'

const NavBar = () => {
  return (
    <header>
      <nav>
        <div className='nav-links'>

          <NavLink to="/">Home</NavLink>
          <NavLink to='/dashboard'>Dashboard</NavLink>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/signup'>Signup</NavLink>
          <NavLink to='/profile'>Profile</NavLink>
          <NavLink to='/cardsearch'>Card Search</NavLink>
          <NavLink to='/support'>Support</NavLink>
          <NavLink to='/about'>About Us</NavLink>
        </div>
      </nav>
      <Outlet />
    </header>
  );
}

export default NavBar