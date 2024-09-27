import { BallCanvas } from "./canvas"; // Importing the BallCanvas component to render 3D ball icons
import { SectionWrapper } from "../hoc"; // Importing a higher-order component to wrap the Tech component
import { motion } from 'framer-motion'; // Importing motion for animations using Framer Motion
import { technologies } from "../constants"; // Importing an array of technology objects
import { styles } from '../styles'; // Importing styles for the component

import { fadeIn, textVariant } from '../utils/motion'; // Importing animation variants from utils

const Tech = () => {
  return (
    <>
      {/* Motion div for animating the section header */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies I Use</p> {/* Subheading for context */}
        <h2 className={styles.sectionHeadText}>My Technologies</h2> {/* Main heading */}
      </motion.div>

      {/* Container for technology icons, using flexbox for layout */}
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {/* Mapping over the technologies array to create a BallCanvas for each technology */}
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}> {/* Unique key for each mapped item */}
            <BallCanvas icon={technology.icon} /> {/* Rendering the BallCanvas with the technology icon */}
          </div>
        ))}
      </div>
    </>
  );
};

// Exporting the Tech component wrapped in the SectionWrapper for additional functionality
export default SectionWrapper(Tech, '');