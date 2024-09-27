import { motion } from 'framer-motion';
import { styles } from '../styles';
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      {/* Background Image */}
      <div 
            className='absolute inset-0 bg-cover bg-center' 
            style={{ backgroundImage: 'url(../public/images/bacground.png)' }} 
        />
        {/* Dimming Overlay */}
        <div className='absolute inset-0 bg-black opacity-60' /> {/* Adjust opacity as needed */}

      {/* Content Container */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col items-center text-center gap-5`}>
        
        {/* Hero Text */}
        <h1 className='text-white font-bold text-[70px]'>
          Fast and Trusted
        </h1>
        <p className='text-white text-[24px] max-w-xl'>
          The most trustworthy cryptocurrency exchange platform available. Where you can have quick access to your money whenever you desire.
        </p>
        <p>Supports 30+</p>

        {/* Container for technology icons, using flexbox for layout */}
      <div className="flex flex-row flex-wrap justify-center gap-5 mt-5">
        {/* Mapping over the technologies array to create a BallCanvas for each technology */}
        {/* Supported Coins (Icons) */}
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}> {/* Unique key for each mapped item */}
            <BallCanvas icon={technology.icon} /> {/* Rendering the BallCanvas with the technology icon */}
          </div>
        ))}
      </div>
      
        {/* App Store Buttons */}
        <div className='flex justify-center items-center gap-4 mt-10'>
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            <img src='/path-to-google-play-badge.png' alt="Google Play" className="w-[150px] h-auto" />
          </a>
          <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
            <img src='/path-to-apple-store-badge.png' alt="App Store" className="w-[150px] h-auto" />
          </a>
        </div>
      </div>



      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/1234567890" // Replace with your WhatsApp link
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-8 right-8 bg-green-500 text-white p-4 rounded-full"
      >
        <img src='/path-to-whatsapp-icon.png' alt="WhatsApp" className="w-10 h-10" />
      </a>
    </section>
  );
};

export default Hero;
