import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='flex flex-col sm:flex-row justify-between items-center h-auto p-3 sm:p-6 text-black shadow-md font-roboto'>
      <div className='flex justify-between w-full items-center'>
        <div className='logo'>
          <Link to='/'>
            <h1 className='text-2xl font-bold tracking-wider hover:text-red-500 transition-colors duration-300'>
              QuickCart
            </h1>
          </Link>
        </div>
        <button
          className='block sm:hidden px-4 py-2 text-lg font-medium focus:outline-none'
          onClick={handleMenuToggle}
        >
          ☰
        </button>
      </div>
      <div
        className={`nav-links ${isMenuOpen ? 'block' : 'hidden'} sm:flex flex-col sm:flex-row gap-8 w-full sm:w-auto`}
      >
        <ul className='flex flex-col sm:flex-row gap-3 lg:gap-9  m-0 p-0 list-none w-full'>
          <li>
            <Link
              to='/'
              className='text-lg font-medium hover:text-red-500 transition-transform duration-300 no-underline'
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className='relative group'>
            <span className='text-lg font-medium cursor-pointer hover:text-red-500 transition-transform duration-300'>
              Categories
            </span>
            <ul className='absolute top-full left-0 bg-gray-800 hidden flex-col min-w-[180px] rounded-lg shadow-lg z-10 opacity-0 group-hover:flex group-hover:opacity-100 transition-opacity duration-300'>
              <li>
                <Link
                  to="/products/men's clothes"
                  className='text-gray-300 block px-4 py-2 text-md hover:bg-gray-700 hover:text-red-500 transition-colors duration-300 no-underline'
                  onClick={() => setIsMenuOpen(false)}
                >
                  Men's clothing
                </Link>
              </li>
              <li>
                <Link
                  to="/products/women's clothes"
                  className='text-gray-300 block px-4 py-2 text-md hover:bg-gray-700 hover:text-red-500 transition-colors duration-300 no-underline'
                  onClick={() => setIsMenuOpen(false)}
                >
                  Women's clothing
                </Link>
              </li>
              <li>
                <Link
                  to="/products/electronics"
                  className='text-gray-300 block px-4 py-2 text-md hover:bg-gray-700 hover:text-red-500 transition-colors duration-300 no-underline'
                  onClick={() => setIsMenuOpen(false)}
                >
                  Electronics
                </Link>
              </li>
              <li>
                <Link
                  to="/products/jewelery"
                  className='text-gray-300 block px-4 py-2 text-md hover:bg-gray-700 hover:text-red-500 transition-colors duration-300 no-underline'
                  onClick={() => setIsMenuOpen(false)}
                >
                  Jewelry
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to='/aboutus'
              className='text-lg font-medium hover:text-red-500 transition-transform duration-300 no-underline'
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
