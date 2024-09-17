import React from 'react';
import '../animation/Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav-section">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-white text-2xl font-bold">Event Name</div>
        <ul className="flex space-x-8 text-white">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">Theme</li>
          <li className="hover:text-blue-400 cursor-pointer">Technical</li>
          <li className="hover:text-blue-400 cursor-pointer">Non-Technical</li>
          <li className="hover:text-blue-400 cursor-pointer">Sponsors</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
