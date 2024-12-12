import React from 'react';

// Import icons from react-icons (install with `npm install react-icons`)
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

// Import the logo from assets
import logo from '../../assets/FiNIT_Logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-500 to-purple-600 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Website Logo and Social Media */}
          <div className="flex flex-col items-start">
            <img src={logo} alt="FiNIT Logo" className="h-16 mb-4" />
            <p className="mb-4">FiNIT - The Finance Society</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-teal-300 transition-transform transform hover:scale-110">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="hover:text-teal-300 transition-transform transform hover:scale-110">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-teal-300 transition-transform transform hover:scale-110">
                <FaLinkedinIn size={24} />
              </a>
              <a href="#" className="hover:text-teal-300 transition-transform transform hover:scale-110">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-teal-300">Home</a></li>
              <li><a href="#about" className="hover:text-teal-300">About Us</a></li>
              <li><a href="#events" className="hover:text-teal-300">Events</a></li>
              <li><a href="#blog" className="hover:text-teal-300">Blog</a></li>
              <li><a href="#contact" className="hover:text-teal-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Ram Kumar: <a href="tel:+1234567890" className="hover:text-teal-300">+91 12345 67890</a></li>
              <li>Fowler: <a href="tel:+9876543210" className="hover:text-teal-300">+91 98765 43210</a></li>
            </ul>
          </div>

          {/* College Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our College</h3>
            <p>National Institute of Technology, Bhopal</p>
            <p>Address: NIT Road, Bhopal, MP, India</p>
          </div>

        </div>

        <hr className="my-8 border-teal-300" />

        {/* Copyright */}
        <p className="text-center">&copy; {new Date().getFullYear()} FiNIT - All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
