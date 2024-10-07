import { useState } from 'react';
import { styles } from '../styles';
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import RegisterModal from './RegisterModal';  // Importing the reusable RegisterModal component
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';  // Importing icons

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);  // State for showing the modal

  return (
    <section className="relative w-full mx-auto pt-10 pb-20">
      {/* Background Image */}
      <div 
        className='absolute inset-0 bg-cover bg-center h-full w-full' 
        style={{ backgroundImage: `url(/images/bacground.png)` }} 
      />
      {/* Dimming Overlay */}
      <div className='absolute inset-0 bg-black opacity-60 h-full w-full' />

      {/* Content Container */}
      <div className={`${styles.paddingX} relative top-0 max-w-7xl mx-auto flex flex-col items-center text-center gap-5`}>
        
        {/* Hero Text */}
        <h1 className='text-white font-bold text-[70px] sm:text-[50px] xs:text-[40px] leading-tight sm:leading-none pt-20'>
          Fast, Trusted and Reliable
        </h1>

        <p className='text-white text-[24px] max-w-xl lg:max-w-4xl'>
          The most trustworthy cryptocurrency exchange platform available. Where you can have quick access to your money whenever you desire.
        </p>
        <p className='text-white'>Supports 30+</p>

        {/* Container for technology icons */}
        <div className="flex flex-row flex-wrap justify-center gap-5 mt-3 mb-2">
          {technologies.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>

        {/* Register Button */}
        <button 
          onClick={() => setIsModalOpen(true)} 
          className="bg-green-500 text-white px-5 py-3 rounded-lg shadow-lg hover:bg-green-600 transition duration-300">
          Register
        </button>

        {/* App Store Buttons */}
        <div className='flex flex-col sm:flex-row justify-center items-center gap-4 mt-5'>
          <a 
            href="https://play.google.com/store" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-start bg-red-600 text-white px-4 py-2 sm:px-5 sm:py-3 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300 w-full sm:w-auto"
          >
            <img src='/images/Google.png' alt="Google Play" className="w-8 h-8 sm:w-12 sm:h-12 mr-3" />
            <div className="text-left">
              <span className="text-xs sm:text-sm block">Get it on</span>
              <span className="text-base sm:text-lg font-bold">Google Play</span>
            </div>
          </a>

          <a 
            href="https://apps.apple.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-start bg-red-600 text-white px-4 py-2 sm:px-5 sm:py-3 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300 w-full sm:w-auto"
          >
            <img src='/images/Apple.png' alt="App Store" className="w-8 h-8 sm:w-12 sm:h-12 mr-3" />
            <div className="text-left">
              <span className="text-xs sm:text-sm block">Download on the</span>
              <span className="text-base sm:text-lg font-bold">App Store</span>
            </div>
          </a>
        </div>
      </div>

      {/* Register Modal */}
      <RegisterModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

      {/* Floating WhatsApp and Telegram buttons */}
      <div className="fixed bottom-4 right-4 flex flex-col gap-4 z-50">
        <a 
          href="https://api.whatsapp.com/send/?phone=%2B2348053188798&text&type=phone_number&app_absent=0" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
        >
          <FaWhatsapp className="w-6 h-6" />
        </a>

        <a 
          href="https://t.me/+EGexcnohVLgzNGVk" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center"
        >
          <FaTelegramPlane className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
