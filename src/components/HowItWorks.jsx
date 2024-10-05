import { SectionWrapper } from "../hoc"; 
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { useState } from 'react';
import RegisterModal from './RegisterModal';  // Import the reusable RegisterModal component

const HowItWorks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);  // State for controlling the modal

  return (
    <motion.div variants={textVariant()} className="p-6 bg-gray-200">
      <section className="flex flex-col lg:flex-row items-center justify-center py-10">
        <div className="lg:w-1/2 p-5">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">How it works</h2>
          <ol className="space-y-6 text-lg">
            <li>
              <span className="font-semibold">1. Register with us</span><br />
              <span className="text-gray-600">Click on the register button and enter your details to receive real-time rate updates, emails, and important, notifications directly from Leo’s Exchange.</span>
            </li>
            <li>
              <span className="font-semibold">2. Join Our Telegram Channel</span><br />
              <span className="text-gray-600">Stay ahead with our latest rate updates and valuable insights by joining our active Telegram community.</span>
            </li>
            <li>
              <span className="font-semibold">3. Follow Us on Social Media</span><br />
              <span className="text-gray-600">Get instant updates by following all our social media platforms, ensuring you never miss out on important announcements and offers.</span>
            </li>
            <li>
              <span className="font-semibold">3. Contact Us on WhatsApp or Telegram for any trade</span><br />
              <span className="text-gray-600">Reach out to us via WhatsApp or Telegram. By doing so, you’ll be added to our contact list and get regular updates from us.</span>
            </li>
          </ol>
        </div>
        <div className="lg:w-1/2 p-5">
          <img 
            src="/images/BTC-removebg-preview.png" 
            alt="How it works" 
            className="w-full h-auto object-cover rounded-lg shadow-lg" 
          />
        </div>
      </section>

      {/* Register Button */}
      <div className="flex justify-center mt-10">
        <button 
          onClick={() => setIsModalOpen(true)} 
          className="bg-green-500 text-white px-5 py-3 rounded-lg shadow-lg hover:bg-green-600 transition duration-300">
          Register
        </button>
      </div>

      {/* Register Modal */}
      <RegisterModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </motion.div>
  );
};

export default SectionWrapper(HowItWorks, 'howitworks');
