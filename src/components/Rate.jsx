import React from 'react';
import { SectionWrapper } from "../hoc";

const Rate = () => {
  return (
    <div className="p-6 bg-green-100 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">
        CURRENT COIN RATE INFORMATION
      </h2>
      <p className="text-lg mb-4">
        Please contact us by visiting our contact section to get the current coin rate as rates fluctuate every second.
      </p>
      <p className="text-md text-green-600">
        Thank you for your patronage!
      </p>
    </div>
  );
};

export default SectionWrapper(Rate, 'rate');
