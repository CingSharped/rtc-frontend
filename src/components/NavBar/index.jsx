import React from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { UserDisplay } from '../'
import './style.css'

const NavBar = () => {
  return (
    <header>
      <nav>
        <div className='nav-links'>
          <UserDisplay />

          <NavLink to="/">Home</NavLink>
          <NavLink to='/dashboard'>Dashboard</NavLink>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/signup'>Signup</NavLink>
        </div>
      </nav>
      <Outlet />
    </header>
  );
}

export default NavBar