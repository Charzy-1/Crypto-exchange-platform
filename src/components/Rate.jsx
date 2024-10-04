import React, { useState, useEffect } from 'react';
import Flag from 'react-world-flags'; // For country flags
import { FaBitcoin, FaDollarSign } from 'react-icons/fa'; // For Bitcoin and USDT logos
import { SectionWrapper } from "../hoc";
import axios from 'axios'; // Import axios for making HTTP requests

const Rate = () => {
  const [btcRates, setBtcRates] = useState([]); // State for BTC rates
  const [usdtRates, setUsdtRates] = useState([]); // State for USDT rates

  useEffect(() => {
    // Fetch current rates
    const fetchRates = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/rates'); // Fetch rates from your API
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
      <table className="w-full text-left">
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
    </div>
  );
};

export default SectionWrapper(Rate, 'rate');
