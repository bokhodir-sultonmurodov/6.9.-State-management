import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-600 text-white shadow-md fixed top-0 left-0 w-full z-20">
      <nav className="container mx-auto flex justify-between items-center px-4 py-3">
        <NavLink to="/" className="text-2xl font-bold">
          MyApp
        </NavLink>

        <div className="hidden md:flex gap-8 items-center text-sm">
          <NavLink to="/" className="hover:text-gray-300 transition">Home</NavLink>
          <NavLink to="/user" className="hover:text-gray-300 transition">Users</NavLink>
          <NavLink to="/like" className="hover:text-gray-300 transition">Liked</NavLink>
          <button className="bg-[#24B47E] text-white px-4 py-2 rounded text-xs hover:bg-green-600 transition">
            Start your project
          </button>
          <button className="text-sm hover:text-gray-300 transition">Sign in</button>
        </div>

        <div className="md:hidden">
          <FiMenu className="text-2xl" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
