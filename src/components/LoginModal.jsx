import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const LoginModal = ({ isOpen, onClose, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = (e) => {
    e.preventDefault();
    // Check credentials
    if (username === 'Bigleo' && password === 'Bigleo@123') { // Replace with actual values
      onLogin(); // Trigger the login success
      navigate('/admin'); // Redirect to Admin page
      setUsername(''); // Clear username
      setPassword(''); // Clear password
      onClose(); // Close the modal
    } else {
      alert('Invalid username or password'); // Alert for invalid credentials
    }
  };

  // Close modal on outside click
  const handleOutsideClick = (e) => {
    if (e.target.className.includes('modal-overlay')) {
      onClose(); // Close the modal
    }
  };

  // Close modal when X button is clicked
  const handleCloseClick = () => {
    onClose();
  };

  if (!isOpen) return null; // Don't render modal if not open

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 modal-overlay"
      onClick={handleOutsideClick} // Handle outside click to close
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative mx-4 mt-80 sm:mx-0 sm:mt840"> {/* Added mx-4 for horizontal margin */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={handleCloseClick} // Close modal when X is clicked
        >
          X
        </button>
        <h2 className="text-xl font-bold mb-4">Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2 w-full"
              required
            />
          </div>
          <button type="submit" className="bg-green-500 text-white p-2">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
