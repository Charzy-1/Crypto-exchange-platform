import { SectionWrapper } from "../hoc"; 
import React, { useState } from 'react';
import { faqData } from '../constants'; 

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-green-500 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-4">FAQ</h2>
      {faqData.map((item, index) => (
        <div key={index} className="mb-4">
          <div 
            className="flex items-center cursor-pointer bg-white p-4 rounded-lg shadow-md"
            onClick={() => toggleAnswer(index)}
          >
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500 text-white shadow-md">
              {openIndex === index ? '-' : '+'}
            </div>
            <p className="ml-4 text-lg font-semibold text-green-500">{item.question}</p>
          </div>
          {openIndex === index && (
            <p className="mt-2 text-white">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(FAQ, ' ');
