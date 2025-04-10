import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
          <ul>
            <li><Link to="/newpost">New Post</Link></li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li><Link to="/about">About</Link></li>  
          </ul>
        </nav>
      );
    };


export default Navbar;