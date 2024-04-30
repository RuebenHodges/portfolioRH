import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
        <nav className='navbar'>
            <ul>
                <li><a href="/">Skills</a></li>
                <li><a href="/about">Experience</a></li>
                <li><a href="/services">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
  );
}

export default Navbar;
