import { useState } from 'react';
import emailjs from '@emailjs/browser';

const RegisterModal = ({ isModalOpen, setIsModalOpen }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form validation function
  const validateForm = () => {
    let errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.phone) errors.phone = 'Phone number is required';
    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);

      // Send email using emailjs
      emailjs.send(
        'service_v4xhhnq',  // Your EmailJS service ID
        'template_y7oshhb',  // Your EmailJS template ID
        {
          from_name: formData.name,      // User's name
          from_email: formData.email,    // User's email
          phone: formData.phone,         // User's phone number
        },
        'UYJY9CIt5_gEcOhxC'  // Your EmailJS public key
      )
      .then(() => {
        console.log('Email sent successfully!');
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
      });
      
    } else {
      setErrors(validationErrors);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!isModalOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4 sm:px-0"
      onClick={() => setIsModalOpen(false)}  // Close when clicking outside the modal
    >
      <div 
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
        onClick={(e) => e.stopPropagation()}  // Prevent closing when clicking inside the form
      >
        {isSubmitted ? (
          <div className="text-center">
            <p className="text-green-500 text-xl font-bold">Thank you for registering!</p>
            <span>✔️</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-xl font-bold">Register with Us</h2>
            
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg" 
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium">Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg" 
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium">Phone Number</label>
              <input 
                type="text" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg" 
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            <div className="flex justify-between items-center">
              <button 
                type="submit" 
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300">
                Submit
              </button>
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="text-red-500 hover:underline">
                Close
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegisterModal;
