import React from 'react';
import logo from '../assets/logo1.png';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white text-navy px-6 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo + Menu */}
        <div className="flex items-center space-x-8">
          <Link to="/">
            <img src={logo} alt="Sri Vyra Logo" className="h-14 w-auto" />
          </Link>

          <ul className="hidden md:flex space-x-4 text-sm uppercase tracking-wide">
            {[
              { label: 'Home', path: '/' },
              { label: 'Courses', path: '/courses' },
              { label: 'Mentorship', path: '/mentorship' },
              { label: 'Registration Form', path: '/register' },
              { label: 'About', path: '/about' }
            ].map(({ label, path }, i) => (
              <li key={i}>
                <Link
                  to={path}
                  className="text-black px-3 py-1 rounded-full cursor-pointer transition border border-transparent hover:bg-black hover:text-white hover:border-black"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Login/Signup */}
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 border border-black text-black px-4 py-1 rounded-full text-sm hover:bg-black hover:text-white transition">
            <FaUser />
            <span>Login / Sign Up</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;