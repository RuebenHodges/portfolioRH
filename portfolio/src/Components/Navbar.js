import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
        <nav className='navbar'>
            <ul>
                <li>
                  <Link to ="/projects">projects</Link>
                </li>
                <li>
                  <Link to ="/about">about</Link>
                </li>
                <li>
                  <Link to ="/contact">contact</Link>
                </li>
            </ul>
        </nav>
  );
}

export default Navbar;
