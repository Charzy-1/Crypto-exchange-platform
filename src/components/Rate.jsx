import React from 'react';
import Flag from 'react-world-flags'; // For country flags
import { FaBitcoin, FaDollarSign } from 'react-icons/fa'; // For Bitcoin and USDT logos
import { SectionWrapper } from "../hoc";

const Rate = () => {
  const rates = [
    { country: 'Nigeria', code: 'NG', buy: '₦1,655', sell: '₦1,695' },
    { country: 'South Africa', code: 'ZA', buy: 'ZAR16.8', sell: 'ZAR18.0' },
    { country: 'United Kingdom', code: 'GB', buy: '-7%', sell: '+10%' },
    { country: 'Turkey', code: 'TR', buy: '5%', sell: '7%' },
  ];

  const usdtRates = [
    { country: 'Nigeria', code: 'NG', buy: '₦750', sell: '₦765' },
    { country: 'South Africa', code: 'ZA', buy: 'ZAR13.5', sell: 'ZAR14.2' },
    { country: 'United Kingdom', code: 'GB', buy: '-2%', sell: '+4%' },
    { country: 'Turkey', code: 'TR', buy: '6%', sell: '8%' },
  ];

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
          {rates.map((rate, index) => (
            <tr key={index}>
              <td className="p-2 flex items-center">
                <Flag code={rate.code} className="w-6 h-6 mr-2" />
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
                <Flag code={rate.code} className="w-6 h-6 mr-2" />
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
