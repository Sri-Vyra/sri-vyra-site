import React, { useEffect, useState, useRef } from 'react';
import logo from '../assets/logo1.png';
import { FaUser } from 'react-icons/fa';
import { ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function Navbar() {
  const { user, logout } = useAuth();
  const [firstName, setFirstName] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedDisplayName = localStorage.getItem('displayName');
    const fallbackName = user?.displayName || storedDisplayName || '';
    if (fallbackName) {
      setFirstName(fallbackName.split(' ')[0]);
    } else {
      const profileData = JSON.parse(localStorage.getItem('vyraUserProfile'));
      if (profileData?.firstName) {
        setFirstName(profileData.firstName);
      }
    }
  }, [user]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleProfileClick = () => {
    setShowDropdown(false);
    navigate('/profile');
  };

  const handleLogout = () => {
    logout();
    setShowDropdown(false);
    navigate('/');
  };

  return (
    <nav className="bg-white text-navy px-6 py-4 shadow-sm z-50">
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
              { label: 'Practice', path: '/practice' },
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

        {/* Right: Profile Dropdown */}
        <div className="relative flex items-center space-x-3" ref={dropdownRef}>
          {user ? (
            <>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center space-x-2 border border-black text-black px-4 py-1 rounded-full text-sm hover:bg-black hover:text-white transition"
              >
                <FaUser />
                <span>Hi, {firstName}</span>
                <ChevronDown size={16} />
              </button>

              {showDropdown && (
                <div className="absolute right-0 top-12 w-36 bg-white border border-gray-200 rounded-xl shadow-md z-50">
                  <button
                    onClick={handleProfileClick}
                    className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-t-xl transition text-center"
                  >
                    👤 Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 rounded-b-xl transition text-center"
                  >
                    🚪 Logout
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="flex items-center space-x-2 border border-black text-black px-4 py-1 rounded-full text-sm hover:bg-black hover:text-white transition"
              >
                <FaUser />
                <span>Login</span>
              </Link>
              <Link
                to="/signup"
                className="text-sm text-green-700 border border-green-600 px-4 py-1 rounded-full hover:bg-green-600 hover:text-white transition"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
