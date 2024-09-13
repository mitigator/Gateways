import React from 'react';
import '../animation/Navbar.css'; 

const Navbar = () => {
  return (
    <div className="flex justify-between items-center  text-navbar-text">
      {/* Left section: Logo, About, Event */}
      <div className="flex space-x-6 bg-navbar-background neon-border">
        <div className="font-bold">Logo</div>
        <a href="#about" className="hover:text-gray-400">About</a>
        <a href="#event" className="hover:text-gray-400">Event</a>
      </div>

      {/* Right section: Brochure, Register */}
      <div className="flex space-x-6 bg-navbar-background neon-border">
        <a href="#brochure" className="hover:text-gray-400">Brochure</a>
        <a href="#register" className="bg-blue-500 px-4 rounded hover:bg-blue-600">Register Now</a>
      </div>
    </div>
  );
};

export default Navbar;
