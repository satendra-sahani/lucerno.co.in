import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPinterest, FaLinkedinIn, FaSearch } from 'react-icons/fa';

const TopHeader = () => {
  const [english, setEnglish] = useState(false);
  const [global, setGlobal] = useState(false);

  const toggleMenuEnglish = () => {
    setEnglish(!english);
    setGlobal(false);
  };

  const toggleMenuGlobal = () => {
    setGlobal(!global);
    setEnglish(false);
  };

  const socialIcons = [
    { Icon: FaFacebookF, href: '#' },
    { Icon: FaInstagram, href: '#' },
    { Icon: FaTwitter, href: '#' },
    { Icon: FaYoutube, href: '#' },
    { Icon: FaPinterest, href: '#' },
    { Icon: FaLinkedinIn, href: '#' },
  ];

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-gray-900 text-white text-sm py-2 px-4"
    >
      <div className="container mx-auto flex justify-between items-center">
        <p className="bg-orange-700 text-white px-2 py-1 rounded">Accessibility</p>
        <div className="flex lg:hidden mx-auto">
          <img src="/assets/logo.png" className='h-100 w-[9rem]' />
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          <a>Investor Relations</a>
          <a>Contact Us</a>
          <div className="relative">
            <button
              onClick={toggleMenuEnglish}
              className="text-white flex items-center space-x-2 hover:text-gray-300"
            >
              <span>English</span>
              <svg
                className={`w-4 h-4 transition-transform ${english ? 'transform rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.77a.75.75 0 011.06 0L10 11.019l3.71-3.24a.75.75 0 111.03 1.09l-4.25 3.71a.75.75 0 01-1.03 0l-4.25-3.71a.75.75 0 010-1.09z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: english ? 1 : 0, y: english ? 0 : -20 }}
              transition={{ duration: 0.3 }}
              className={`absolute right-0 mt-2 bg-gray-800 text-white rounded-lg shadow-lg w-40 z-50 ${english ? 'block' : 'hidden'}`}
            >
              <ul className="py-1">
                <li><a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Français</a></li>
                <li><a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Español</a></li>
              </ul>
            </motion.div>
          </div>
          <div className="relative">
            <button
              onClick={toggleMenuGlobal}
              className="text-white flex items-center space-x-2 hover:text-gray-300"
            >
              <span>Global</span>
              <svg
                className={`w-4 h-4 transition-transform ${global ? 'transform rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.77a.75.75 0 011.06 0L10 11.019l3.71-3.24a.75.75 0 111.03 1.09l-4.25 3.71a.75.75 0 01-1.03 0l-4.25-3.71a.75.75 0 010-1.09z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: global ? 1 : 0, y: global ? 0 : -20 }}
              transition={{ duration: 0.3 }}
              className={`absolute right-0 mt-2 bg-gray-800 text-white rounded-lg shadow-lg w-48 z-50 ${global ? 'block' : 'hidden'}`}
            >
              <ul className="py-1">
                <li><a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Africa</a></li>
                <li><a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Asia Pacific</a></li>
                <li><a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Europe</a></li>
                <li><a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Latin America & Caribbean</a></li>
                <li><a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Middle East</a></li>
                <li><a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">North America</a></li>
              </ul>
            </motion.div>
          </div>
          <a>FAQ</a>
          <a>Fabricators Websites</a>
          {socialIcons.map(({ Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-gray-300 transition-colors"
            >
              <Icon className="w-4 h-4" />
            </motion.a>
          ))}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-white text-gray-900 text-sm px-3 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4 lg:hidden">
          <FaSearch className="text-white w-5 h-5 cursor-pointer hover:text-gray-300" />
        </div>
      </div>
    </motion.div>
  );
};

export default TopHeader;
