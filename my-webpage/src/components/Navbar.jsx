import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar-div'>
      <nav className='navbar-links'>
        <NavLink to="/" className={({ isActive }) =>
          isActive ? "cur-page" : ""}>
          <h3 className='nav-name'>Home</h3>
        </NavLink>
        <NavLink to="/about" className={({ isActive }) =>
          isActive ? "cur-page" : ""}>
          <h3 className='nav-name'>About</h3>
        </NavLink>
        <NavLink to="/books" className={({ isActive }) =>
          isActive ? "cur-page" : ""}>
          <h3 className='nav-name'>Books</h3>
        </NavLink>
        <NavLink to="/social" className={({ isActive }) =>
          isActive ? "cur-page" : ""}>
          <h3 className='nav-name'>Social</h3>
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) =>
          isActive ? "cur-page" : ""}>
          <h3 className='nav-name'>Contact</h3>
        </NavLink>
      </nav>
    </div>
  )
}

export default Navbar