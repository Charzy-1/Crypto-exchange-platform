import { styles } from '../styles';
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";

const Hero = () => {
  return (
    <section className="relative w-full mx-auto pt-10 pb-20">
      {/* Background Image */}
      <div 
        className='absolute inset-0 bg-cover bg-center h-full w-full' 
        style={{ backgroundImage: `url(/images/bacground.png)` }} 
      />
      {/* Dimming Overlay */}
      <div className='absolute inset-0 bg-black opacity-60 h-full w-full' /> {/* Ensures overlay covers the entire section */}

      {/* Content Container */}
      <div className={`${styles.paddingX} relative top-0 max-w-7xl mx-auto flex flex-col items-center text-center gap-5`}>
        
        {/* Hero Text */}
        <h1 className='text-white font-bold text-[70px] sm:text-[50px] xs:text-[40px] leading-tight sm:leading-none pt-20'>
          Fast and Trusted
        </h1>

        <p className='text-white text-[24px] max-w-xl lg:max-w-4xl'>
          The most trustworthy cryptocurrency exchange platform available. Where you can have quick access to your money whenever you desire.
        </p>
        <p className='text-white'>Supports 30+</p>

        {/* Container for technology icons, using flexbox for layout */}
        <div className="flex flex-row flex-wrap justify-center gap-5 mt-3 mb-2">
          {technologies.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      
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

      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/1234567890" // Replace with your WhatsApp link
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-10 bottom-8 right-8 bg-green-500 text-white p-4 rounded-full"
      >
        <img src='/images/WhatsApp.png' alt="WhatsApp" className="w-10 h-10" />
      </a>
    </section>
  );
};

export default Hero;
