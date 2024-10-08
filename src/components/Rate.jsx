import React, { useState, useEffect } from 'react';
import Flag from 'react-world-flags'; // For country flags
import { FaBitcoin, FaDollarSign, FaWhatsapp } from 'react-icons/fa'; // For Bitcoin, USDT logos, and WhatsApp icon
import { SectionWrapper } from "../hoc";
import axios from 'axios'; // Import axios for making HTTP requests

const Rate = () => {
  const [btcRates, setBtcRates] = useState([]); // State for BTC rates
  const [usdtRates, setUsdtRates] = useState([]); // State for USDT rates

  useEffect(() => {
    // Fetch current rates
    const fetchRates = async () => {
      try {
        const response = await axios.get('https://crypto-backend-3k2b.onrender.com/api/rates'); // Fetch rates from your API
        const btcData = response.data.filter(rate => rate.type === 'btc'); // Filter for BTC rates
        const usdtData = response.data.filter(rate => rate.type === 'usdt'); // Filter for USDT rates
        setBtcRates(btcData); // Update state for BTC rates
        setUsdtRates(usdtData); // Update state for USDT rates
      } catch (error) {
        console.error("Error fetching rates:", error); // Handle any errors
      }
    };

    fetchRates(); // Call the function to fetch rates
  }, []); // Run once on component mount

  return (
    <div className="p-6 bg-white rounded-lg shadow-md text-center">
      {/* Bitcoin Section */}
      <h2 className="text-xl font-bold mb-4 flex items-center justify-center">
        <FaBitcoin className="mr-2" /> Bitcoin Trading Rate
      </h2>
      <table className="w-full text-left mb-8">
        <thead>
          <tr>
            <th className="border-b-2 p-2">COUNTRY</th>
            <th className="border-b-2 p-2">BUY</th>
            <th className="border-b-2 p-2">SELL</th>
          </tr>
        </thead>
        <tbody>
          {btcRates.map((rate, index) => (
            <tr key={index}>
              <td className="p-2 flex items-center">
                <Flag code={rate.code} className="w-6 h-6 mr-2" /> {/* Add flag beside country name */}
                {rate.country}
              </td>
              <td className="p-2">{rate.buy}</td>
              <td className="p-2">{rate.sell}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* USDT Section */}
      <h2 className="text-xl font-bold mb-4 flex items-center justify-center">
        <FaDollarSign className="mr-2" /> USDT Trading Rate
      </h2>
      <table className="w-full text-left mb-8">
        <thead>
          <tr>
            <th className="border-b-2 p-2">COUNTRY</th>
            <th className="border-b-2 p-2">BUY</th>
            <th className="border-b-2 p-2">SELL</th>
          </tr>
        </thead>
        <tbody>
          {usdtRates.map((rate, index) => (
            <tr key={index}>
              <td className="p-2 flex items-center">
                <Flag code={rate.code} className="w-6 h-6 mr-2" /> {/* Add flag beside country name */}
                {rate.country}
              </td>
              <td className="p-2">{rate.buy}</td>
              <td className="p-2">{rate.sell}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Additional Information */}
      <div className="mt-6">
        <p className="text-center">
          Contact us on 
          <a 
            href="https://api.whatsapp.com/send/?phone=%2B2348053188798&text&type=phone_number&app_absent=0" // Replace with your actual phone number
            className="text-green-500 flex items-center justify-center"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="ml-2" /> WhatsApp
          </a> 
          for rate of iTunes, Gift cards and other coins.
        </p>
        <br />
        <p className="text-green-500">Thanks for trading with Leo.</p>
      </div>
    </div>
  );
};

export default SectionWrapper(Rate, 'rate');
