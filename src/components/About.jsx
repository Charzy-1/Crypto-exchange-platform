import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';

import { styles } from '../styles'; 
import { services } from '../constants'; 
import { fadeIn, textVariant } from '../utils/motion';

// Component to display individual service cards
const ServiceCard = ({ index, title, icon }) => {
  return (
    // Tilt effect for the card
    <Tilt className='xs:w-[250px] xs:h-[300px] w-[250px] h-[300px]'> {/* Fixed width and height */}
      {/* Motion div for fade-in animation with custom timing */}
      <motion.div 
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full h-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div 
          options={{
            max: 45, 
            scale: 1,
            speed: 450 
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 flex justify-center items-center flex-col h-full overflow-hidden' // Ensures content stays within card
        >
          {/* Icon for the service */}
          <img src={icon} alt={title} className='w-16 h-16 object-contain mb-4'/>
          {/* Title of the service */}
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
}

// Main About component
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      
      <motion.p variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a dynamic software developer with knowledge of frameworks like React, NextJS, and ThreeJS. I have experience with Typescript and JavaScript. I work directly with clients to develop effective, scalable, and user-friendly solutions that address challenges in the real world. I'm a quick learner. Together, let's make your ideas a reality!
      </motion.p>

      {/* Centering container for service cards */}
      <div className='mt-20 flex flex-wrap justify-center items-center gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(About, 'about');
