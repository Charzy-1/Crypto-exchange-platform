import { SectionWrapper } from "../hoc"; // Importing a higher-order component to wrap the Tech component
import { motion } from 'framer-motion'; // Importing motion for animations using Framer Motion

import { textVariant } from '../utils/motion'; // Importing motion utilities

const TrustUsSection = () => {
    return (
      <motion.div variants={textVariant()} className="p-6 bg-gray-200">
        {/* Main Section */}
        <section className="text-center">
          {/* Heading */}
          <h2 className='text-green-500 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl'>
            WHY TRADE WITH US?
          </h2>
          {/* Subheading */}
          <p className="text-lg text-gray-600 mb-10">
            We value your trust above all else and always make your security our top priority.
          </p>

          {/* Grid for Features */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-5">
            {/* Feature 1 */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <img src="https://swiftpaymobile.com/landing/img/icon-1.png" alt="Swift Transactions" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700">Swift Transactions</h3>
              <p className="text-gray-600 mt-2">
                5 years of providing crypto trading services. Our integrity matters to us, just as serving you with great speed.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <img src="https://swiftpaymobile.com/landing/img/icon-2.png" alt="Secured Payments" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700">Secured & Safe Payments</h3>
              <p className="text-gray-600 mt-2">
                Safe and secure trading experience. Gift cards are safe because we redeem them within 15 minutes.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <img src="https://swiftpaymobile.com/landing/img/icon-3.png" alt="Instant Withdrawal" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700">Instant Withdrawal</h3>
              <p className="text-gray-600 mt-2">
                24/7 customer support available to resolve any issue you may have quickly.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <img src="https://swiftpaymobile.com/landing/img/offer_card.png" alt="We buy Giftcards" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700">We buy Giftcards</h3>
              <p className="text-gray-600 mt-2">
                Swift and secure Giftcard transactions, offering competitive rates and fast payments.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <img src="https://swiftpaymobile.com/landing/img/thumbs.png" alt="Best Market Rates" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700">Best Market Rates</h3>
              <p className="text-gray-600 mt-2">
                Buy and sell at the best rates for maximum value. Secure, user-friendly, and empowering.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <img src="https://swiftpaymobile.com/landing/img/bonus.png" alt="Registration Bonus" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700">Registration Bonus</h3>
              <p className="text-gray-600 mt-2">
                Sign up for exclusive benefits and get a registration bonus to kickstart your journey.
              </p>
            </div>
          </div>
        </section>
      </motion.div>
    );
};

export default SectionWrapper(TrustUsSection, '');
