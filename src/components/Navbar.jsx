import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="p-6 bg-blue-600 text-white w-full">
      <ul className="flex space-x-4">
        <li>
          <Link to="/intro">Intro</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>

        <li>
          <Link to="/contacts">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
