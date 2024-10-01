import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';

import { styles } from '../styles'; 
import { testimonials } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const FeedbackCard = ({ index, testimonial, name, designation, company, image}) => (
  
  <motion.div
  variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    className='bg-white p-10 rounded-3xl xs:w-[320px] w-full shadow-lg'
  >
    <p className='text-red-500 font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-black tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-co'>
          <p className='text-black font-medium text-[16px]'>
            <span>@</span> {name}
          </p>
        </div>

        <img 
          src={image} 
          alt={`feedback-by-${name}`} 
          className='w-10 h-10 rounded-full object-cover'
          />
      </div>
    </div>
  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className=' rounded-[20px]'>
      <div className={`${styles.padding} bg-green-500 rounded-2xl min-h-[200px] `}>
      <motion.div variants={textVariant()}>
        <p className='text-white font-black mt-6'>What others say</p> {/* Subheading for context */}
        <h2 className={styles.sectionHeadText}>Testimonials</h2> {/* Main heading */}
      </motion.div>
      </div>

        <div className={`${styles.padding} -mt-20 pb-14 flex flex-wrap gap-7`}>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}/>
          ))}
        </div>
      </div>
  )
}

export default SectionWrapper(Feedbacks, '')