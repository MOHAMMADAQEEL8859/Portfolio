import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-500 text-white p-4 flex justify-around">
      <Link to="/" className="hover:text-green-500">Home</Link>
      <Link to="/about" className="hover:text-green-500">About Me</Link>
      <Link to="/skills" className="hover:text-green-500">Skills</Link>
      <Link to="/projects" className="hover:text-green-500">Projects</Link>
      <Link to="/contact" className="hover:text-green-500">Contact Me</Link>
      {/* Add other links here */}
    </nav>
  );
};

export default Navbar;
