import React, { useState, useEffect } from "react";
import axios from "axios";
import Flag from 'react-world-flags'; // Import the Flag component

const Admin = () => {
  const [rates, setRates] = useState([]);
  const [formData, setFormData] = useState({ country: "", buy: "", sell: "", type: "btc" });
  const [errors, setErrors] = useState({ country: "", buy: "", sell: "" }); // State for error messages

  useEffect(() => {
    // Fetch current rates from live backend
    axios.get("https://crypto-backend-98c3cmmu2-charzys-projects-383bef16.vercel.app")
      .then(response => setRates(response.data))
      .catch(error => console.error("Error fetching rates", error));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error message when input changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {}; // Object to hold validation errors
    // Check if any field is empty
    if (!formData.country) {
      validationErrors.country = 'Country is required!';
    }
    if (!formData.buy) {
      validationErrors.buy = 'Buy price is required!';
    }
    if (!formData.sell) {
      validationErrors.sell = 'Sell price is required!';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set the errors in state
      return; // Exit the function if there are validation errors
    }

    // Post updated rates to live backend
    axios.post("https://crypto-backend-98c3cmmu2-charzys-projects-383bef16.vercel.app", formData)
      .then(response => {
        console.log("Updated rate", response.data);
        // Update rates and clear the form
        setRates([...rates.filter(r => r.country !== response.data.country || r.type !== response.data.type), response.data]);
        setFormData({ country: "", buy: "", sell: "", type: "btc" }); // Clear the form
      })
      .catch(error => console.error("Error updating rate", error));
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-600">Admin: Update Coin Rates</h2>

      {/* Centered and Max Width Form */}
      <form 
        onSubmit={handleSubmit} 
        className="bg-green-100 p-6 rounded-lg shadow-md mb-8 mx-auto max-w-md" // Set max width and center
      >
        <div className="mb-4">
          <label className="block font-medium">Country:</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring focus:ring-green-300 transition duration-200"
          />
          {errors.country && <p className="text-red-500">{errors.country}</p>} {/* Display error message for country */}
        </div>
        <div className="mb-4">
          <label className="block font-medium">Buy Price:</label>
          <input
            type="text"
            name="buy"
            value={formData.buy}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring focus:ring-green-300 transition duration-200"
          />
          {errors.buy && <p className="text-red-500">{errors.buy}</p>} {/* Display error message for buy price */}
        </div>
        <div className="mb-4">
          <label className="block font-medium">Sell Price:</label>
          <input
            type="text"
            name="sell"
            value={formData.sell}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring focus:ring-green-300 transition duration-200"
          />
          {errors.sell && <p className="text-red-500">{errors.sell}</p>} {/* Display error message for sell price */}
        </div>
        <div className="mb-4">
          <label className="block font-medium">Type:</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring focus:ring-green-300 transition duration-200"
          >
            <option value="btc">BTC</option>
            <option value="usdt">USDT</option>
          </select>
        </div>
        <button type="submit" className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition duration-200">Update</button>
      </form>

      <h2 className="text-xl font-bold mb-4 text-center">Current Rates</h2>
      <div className="overflow-x-auto mx-auto max-w-md"> {/* Added max width and scroll for small screens */}
        <table className="w-full text-left border">
          <thead>
            <tr>
              <th className="border-b-2 p-2">COUNTRY</th>
              <th className="border-b-2 p-2">BUY</th>
              <th className="border-b-2 p-2">SELL</th>
              <th className="border-b-2 p-2">TYPE</th>
            </tr>
          </thead>
          <tbody>
            {rates.map((rate, index) => (
              <tr key={index} className="hover:bg-gray-100 transition duration-200">
                <td className="p-2 flex items-center">
                  <Flag code={rate.code} className="w-6 h-6 mr-2" /> {/* Add flag beside country name */}
                  {rate.country}
                </td>
                <td className="p-2">{rate.buy}</td>
                <td className="p-2">{rate.sell}</td>
                <td className="p-2">{rate.type.toUpperCase()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
