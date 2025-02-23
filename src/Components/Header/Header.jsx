import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import nav_logo from '../../assets/nav_logo.jpg';
import FiNIT_Logo from '../../assets/FiNIT_Logo.jpg';
import './Header.css';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';


function Header() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useGSAP(() => {
    
    gsap.to('nav', {
      backgroundImage: 'linear-gradient(135deg, rgba(0, 128, 128, 0.8), rgba(128, 0, 128, 0.8))',
      duration: 0.5,
      scrollTrigger: {
        trigger: 'body',
        start: 'top+=400', 
        toggleActions: 'play none none reverse', 
        markkers: true
      },
    });
  }, []);


  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/team', label: 'Team' },
    { to: '/events', label: 'Events' },
    { to: '/contact', label: 'Contact US' },
  ];

  return (
    <header className="fixed z-50 top-4 w-full lg:px-12">
      <nav className="shadow bg-transparent rounded-2xl border-gray-200 px-4 lg:px-6 py-2.5">
        <div style={{fontFamily:'fh2'}} className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={nav_logo}
              className="object-cover h-14 border border-[#00FFCC] rounded-full"
              alt="Logo"
            />
          </Link>

          {/* Hamburger Button */}
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
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Navigation Links */}
          <div
            className={`${
              isMenuOpen
                ? 'absolute opacity-100 translate-y-0 visible order-2'
                : 'absolute opacity-0 -translate-y-4 invisible'
            } top-full left-0 w-full lg:relative lg:opacity-100 lg:translate-y-0 lg:visible lg:flex lg:items-center lg:w-auto transition-all duration-300 ease-in-out`}
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-12 lg:mt-0 bg-gray-800 lg:bg-transparent">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    
                    to={to}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 ${
                        isActive ? 'text-teal-300' : 'text-white'
                      } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-600 lg:p-0`
                    }
                    onClick={() => {
                      toggleMenu();
                      window.scrollTo(0, 0);
                    }}
                    
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="items-center lg:order-2 hidden">
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
  );
}

export default Header;
