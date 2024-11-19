import React from 'react';
import { motion } from 'framer-motion';
import img from '../../../assets/aboutUs.jpg';

const AboutSection = () => {
  return (
    <section className="bg-white py-16 px-6 dark:bg-slate-700">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start">
        <motion.div
          className="w-full lg:w-1/2 mb-8 lg:mb-0 relative"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="rounded-xl shadow-xl overflow-hidden relative">
            <img
              src={img}
              alt="About Us"
              className="rounded-xl shadow-xl w-full object-cover h-72 lg:h-96"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl dark:bg-black dark:bg-opacity-60"></div>
          </div>
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2 lg:pl-12"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight dark:text-gray-300">
            About Our Company
          </h2>
          <p className="text-gray-700 text-justify leading-relaxed mb-6 dark:text-gray-300">
            Our company is dedicated to providing top-notch services and solutions
            tailored to meet your needs. With a team of experienced professionals, we
            focus on innovation, excellence, and customer satisfaction. Join us in our
            journey to make a meaningful impact on the industry.
          </p>
          <p className="text-gray-700 text-justify leading-relaxed mb-6 dark:text-gray-300">
            From the start, our goal has been clear: to deliver high-quality results
            that exceed expectations. We value transparency, trust, and a commitment
            to driving progress in everything we do.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
