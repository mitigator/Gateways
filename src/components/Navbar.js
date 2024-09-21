import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-[#17065C] to-[#050046] text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="#">Logo</a>
        </div>

        {/* Middle Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-purple-400">About</a>
          <a href="#events" className="hover:text-purple-400">Events</a>
          <a href="#committee" className="hover:text-purple-400">Committee</a>
        </div>

        {/* Right Buttons */}
        <div className="flex space-x-4">
          <a href="#brochure" className="bg-transparent border border-purple-500 text-purple-500 py-2 px-4 rounded hover:bg-purple-500 hover:text-white transition">
            Brochure
          </a>
          <a href="#register" className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-700 transition">
            Register Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
