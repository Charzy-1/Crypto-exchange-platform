import { SectionWrapper } from "../hoc"; // Importing a higher-order component to wrap the Tech component
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion'; 

const HowItWorks = () => {
  return (
    <motion.div variants={textVariant()} className="p-6 bg-gray-200">
    <section className="flex flex-col lg:flex-row items-center justify-center py-10">
      <div className="lg:w-1/2 p-5">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">How it works</h2>
        <ol className="space-y-6 text-lg">
          <li>
            <span className="font-semibold">1. Log into your Account</span><br />
            <span className="text-gray-600">The most secure way to sell your Bitcoin!</span>
          </li>
          <li>
            <span className="font-semibold">2. Copy our wallet address</span><br />
            <span className="text-gray-600">The most secure way to sell your Bitcoin!</span>
          </li>
          <li>
            <span className="font-semibold">3. Send coins and upload proof</span><br />
            <span className="text-gray-600">The most secure way to sell your Bitcoin!</span>
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
    </motion.div>
  );
};

export default SectionWrapper(HowItWorks, '');
