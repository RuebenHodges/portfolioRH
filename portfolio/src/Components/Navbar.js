import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
        <nav className='navbar'>
            <ul>
                <li><a href="/">Projects</a></li>
                <li><a href="/about me">About Me</a></li>
                <li><a href="/services">Hire Me</a></li>
            </ul>
        </nav>
  );
}

export default Navbar;
