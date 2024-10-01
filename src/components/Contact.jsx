import { SectionWrapper } from "../hoc"; 
import React from 'react';
import { socialLinks } from '../constants'; // Adjust the path if needed

const Contact = () => {
  return (
    <div className="flex flex-col items-center py-5">
      <h2 className="text-xl font-bold mb-4">Contact us:</h2>
      <div className="flex justify-center space-x-4">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center w-12 h-12 bg-white rounded-full shadow-md transition-transform transform hover:scale-105"
          >
            <img src={social.icon} alt={social.name} className="w-6 h-6 object-contain" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
