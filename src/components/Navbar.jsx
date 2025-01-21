import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-black font-bold text-2xl">Mm</Link>
          <div className="flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Work</Link>
            <Link to="/fun" className="text-gray-600 hover:text-gray-900">Fun</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link to="/resume" className="text-gray-600 hover:text-gray-900">Resume</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;