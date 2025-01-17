import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Arrow from './Arrow';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="text-[#f2f2f2e6] bg-[#101010b3] fixed top-0 left-0 w-full z-50">
      {/* Navbar Container */}
      <div className="flex justify-between items-center py-6 px-6 sm:py-8 sm:px-16">
        {/* Left Section */}
        <Link to='/'>
          <div className="text-center sm:text-left">
            <p className="text-base sm:text-lg font-semibold">Nalaka Dinesh</p>
            <p className="text-xs sm:text-sm opacity-70">Software Eng.</p>
          </div>
        </Link>

        {/* Menu Icon for Mobile */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Right Section (Desktop) */}
        <div className="hidden sm:flex gap-8 font-medium text-base">
          <div className="flex items-center py-2 px-4 hover:bg-slate-800 transition duration-300 rounded-full">
            <p>
              <a
                href="https://www.linkedin.com/in/nalaka-dinesh-b53173271/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </p>
            <Arrow />
          </div>
          <div className="flex items-center py-2 px-4 hover:bg-slate-800 transition duration-300 rounded-full">
            <p>Resume</p>
            <Arrow />
          </div>
          <div className="flex items-center py-2 px-4 hover:bg-slate-800 transition duration-300 rounded-full">
            <p>
              <Link to='/info'>Area51</Link>
            </p>
            <Arrow />
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div
        className={`sm:hidden bg-[#101010] text-[#f2f2f2e6] flex flex-col gap-4 px-6 py-4 
        ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
        overflow-hidden transition-all duration-500 ease-in-out`}
      >
        <div className="py-2 px-4 hover:bg-slate-800 transition duration-300 rounded-md">
          <a
            href="https://www.linkedin.com/in/nalaka-dinesh-b53173271/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="py-2 px-4 hover:bg-slate-800 transition duration-300 rounded-md">
          <p>Resume</p>
        </div>
        <div className="py-2 px-4 hover:bg-slate-800 transition duration-300 rounded-md">
          <Link to='/info'>Area51</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
