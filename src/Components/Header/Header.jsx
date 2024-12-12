import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import FiNIT_Logo from '../../assets/FiNIT_Logo.jpg';
import './Header.css';

function Header() {
  // State to toggle mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed z-50 top-4 w-full lg:px-12">
        <nav className="shadow bg-transparent rounded-2xl border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={FiNIT_Logo} className="object-cover h-12" alt="Logo" />
            </Link>

            {/* Hamburger Button with Smooth Transition */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-white focus:outline-none order-1 transition-transform duration-300"
              aria-label="Toggle menu"
            >
              <svg
                className={`w-8 h-8 transform transition-transform duration-300 ${
                  isMenuOpen ? 'rotate-90' : 'rotate-0'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path> // Close icon (X)
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path> // Hamburger icon
                )}
              </svg>
            </button>

            {/* Navigation Links with Smooth Transition */}
            <div
  className={`${
    isMenuOpen
      ? 'absolute opacity-100 translate-y-0 visible order-2'
      : 'absolute opacity-0 -translate-y-4 invisible'
  } top-full left-0 w-full lg:relative lg:opacity-100 lg:translate-y-0 lg:visible lg:flex lg:items-center lg:w-auto transition-all duration-300 ease-in-out`}
>
  <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-12 lg:mt-0 bg-gray-800 lg:bg-transparent">
    <li>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `block py-2 pr-4 pl-3 ${
            isActive ? 'text-teal-300' : 'text-white'
          } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-600 lg:p-0`
        }
        onClick={toggleMenu}
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `block py-2 pr-4 pl-3 ${
            isActive ? 'text-teal-300' : 'text-white'
          } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-600 lg:p-0`
        }
        onClick={toggleMenu}
      >
        About
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/team"
        className={({ isActive }) =>
          `block py-2 pr-4 pl-3 ${
            isActive ? 'text-teal-300' : 'text-white'
          } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-600 lg:p-0`
        }
        onClick={toggleMenu}
      >
        Team
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/events"
        className={({ isActive }) =>
          `block py-2 pr-4 pl-3 ${
            isActive ? 'text-teal-300' : 'text-white'
          } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-600 lg:p-0`
        }
        onClick={toggleMenu}
      >
        Events
      </NavLink>
    </li>
  </ul>
</div>


            {/* Login and Read Blogs Buttons */}
            <div className="flex items-center lg:order-2">
              <Link
                to="#"
                className="text-white hover:bg-gray-500 focus:ring-1 focus:ring-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Log in
              </Link>
              <Link
                to="#"
                className="text-white bg-purple-600 hover:bg-purple-400 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Read Blogs
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
