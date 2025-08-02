import React from 'react';
import './HeroSection.css';
import pipelineGif from '../assets/pipeline.gif';
import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-4 bg-white h-[65vh] pt-20 md:pt-28 lg:pt-32">
      {/* Left: Text Content */}
      <div className="max-w-xl md:w-1/2">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Empowering <span className="text-blue-600">Data Engineers</span> of Tomorrow
        </motion.h1>

        <motion.p
          className="mt-4 text-base md:text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Data is the new oil. Learn real skills from real mentors. Build projects. Transform your career with Sri Vyra.
        </motion.p>

        <motion.a
          href="#courses"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Courses
        </motion.a>
      </div>

      {/* Right: Pipeline GIF */}
      <motion.div
        className="md:-mt-8 md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={pipelineGif}
          alt="Data Pipeline Animation"
          className="w-full max-w-[800px] md:max-w-[800px] h-auto"
        />
      </motion.div>
    </section>
  );
}

export default HeroSection;
