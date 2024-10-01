import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"; // Use Link from react-router-dom
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [navbarBackground, setNavbarBackground] = useState(false); // Track background change

  // Handle navbar visibility and background color on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar when scrolling down, show it when scrolling up
      if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      // Add grayscale background when not at the top
      if (currentScrollY > 0) {
        setNavbarBackground(true);
      } else {
        setNavbarBackground(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transition-transform duration-500 ${showNavbar ? 'translate-y-0' : '-translate-y-full'} ${navbarBackground ? 'bg-gray-500 bg-opacity-50 backdrop-blur-md' : 'bg-transparent'} transition-colors duration-500`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto text-primary'>
        <Link
          to='/'
          className='flex items-center gap-2'
        >
          <img src={logo} alt='company logo' className='w-13 h-12 object-contain' loading='lazy' />
          <p className='text-green-500 text-[20px] font-bold flex'>Leo'sExchange &nbsp; <span className='sm:block hidden'></span></p>
        </Link>

        {/* Desktop Nav Links */}
        <ul className='list-none hidden sm:flex flex-row gap-5'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-white' : 'text-white'
              } hover:bg-green-500 hover:text-white text-[18px] font-medium cursor-pointer px-3 py-2 rounded-md transition-all duration-300`}
              onClick={() => {
                if (nav.id === "home") {
                  setActive(nav.title);
                  window.scrollTo(0, 0); // Scroll to top when clicking Home
                } else if (nav.id === "contact") {
                  setActive(nav.title);
                  document.getElementById("contact").scrollIntoView({ behavior: "smooth" }); // Scroll to contact section
                } else {
                  setActive(nav.title);
                }
              }}
            >
              <Link to={nav.id === "home" ? "#" : (nav.id === "contact" ? "#" : `/${nav.id}`)} onClick={() => {
                if (nav.id === "home") {
                  setActive(nav.title);
                  window.scrollTo(0, 0); // Scroll to top when clicking Home
                } else if (nav.id === "contact") {
                  setActive(nav.title);
                  document.getElementById("contact").scrollIntoView({ behavior: "smooth" }); // Scroll to contact section
                }
              }}>
                {nav.title}
              </Link>
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

          <div className={`${
            !toggle ? 'hidden' : 'flex'
          } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? 'text-white' : 'text-secondary'
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    if (nav.id === "home") {
                      setActive(nav.title);
                      window.scrollTo(0, 0); // Scroll to top when clicking Home
                    } else if (nav.id === "contact") {
                      setActive(nav.title);
                      document.getElementById("contact").scrollIntoView({ behavior: "smooth" }); // Scroll to contact section
                    } else {
                      setToggle(false);
                      setActive(nav.title);
                    }
                  }}
                >
                  <Link to={nav.id === "home" ? "#" : (nav.id === "contact" ? "#" : `/${nav.id}`)} onClick={() => {
                    if (nav.id === "home") {
                      setActive(nav.title);
                      window.scrollTo(0, 0); // Scroll to top when clicking Home
                    } else if (nav.id === "contact") {
                      setActive(nav.title);
                      document.getElementById("contact").scrollIntoView({ behavior: "smooth" }); // Scroll to contact section
                    } else {
                      setToggle(false);
                      setActive(nav.title);
                    }
                  }}>
                    {nav.title}
                  </Link>
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
