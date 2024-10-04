import React, { useState, useEffect } from "react";
import axios from "axios";

const Admin = () => {
  const [rates, setRates] = useState([]);
  const [formData, setFormData] = useState({ country: "", buy: "", sell: "", type: "btc" });

  useEffect(() => {
    // Fetch current rates
    axios.get("http://localhost:5000/api/rates")
      .then(response => setRates(response.data))
      .catch(error => console.error("Error fetching rates", error));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/rates/update", formData)
      .then(response => {
        console.log("Updated rate", response.data);
        setRates([...rates.filter(r => r.country !== response.data.country || r.type !== response.data.type), response.data]);
      })
      .catch(error => console.error("Error updating rate", error));
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Admin: Update Coin Rates</h2>

      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label className="block">Country:</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block">Buy Price:</label>
          <input
            type="text"
            name="buy"
            value={formData.buy}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block">Sell Price:</label>
          <input
            type="text"
            name="sell"
            value={formData.sell}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block">Type:</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="border p-2 w-full"
          >
            <option value="btc">BTC</option>
            <option value="usdt">USDT</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2">Update</button>
      </form>

      <h2 className="text-xl font-bold mb-4">Current Rates</h2>
      <table className="w-full text-left">
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
            <tr key={index}>
              <td className="p-2">{rate.country}</td>
              <td className="p-2">{rate.buy}</td>
              <td className="p-2">{rate.sell}</td>
              <td className="p-2">{rate.type.toUpperCase()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;