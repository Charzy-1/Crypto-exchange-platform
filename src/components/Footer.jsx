import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Footer = () => {
  return (
    <footer className="bg-green-500 text-white py-4 text-center">
      <p className="text-sm">
        Copyright &copy; {new Date().getFullYear()} 
        <Link to="/" className="text-white font-bold"> Leo'sExchange</Link>. 
        <br />
        All rights reserved.
      </p>
      <div className="mt-2">
        <Link to="/terms" className="text-white underline mx-2">Terms and Conditions</Link>
        |
        <Link to="/privacy" className="text-white underline mx-2">Privacy policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
