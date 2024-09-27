import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"; // Use Link from react-router-dom

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-white`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto text-primary'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0); // Scroll to top when clicking the logo
          }}
        >
          <img src={logo} alt='company logo' className='w-10 h-10 object-contain' loading='lazy' />
          <p className='text-green-500 text-[20px] font-bold cursor-pointer flex'>
          | &nbsp; Leo'sExchange &nbsp; <span className='sm:block hidden'></span>
          </p>
        </Link>
        
        {/* Desktop Nav Links */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-white' : 'text-black'
              } hover:text-red-500 text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              {/* Change <a> to <Link> for page navigation */}
              <Link to={`/${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? 'text-white' : 'text-secondary'
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  {/* Change <a> to <Link> for page navigation */}
                  <Link to={`/${nav.id}`}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
