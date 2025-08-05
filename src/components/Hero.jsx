import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Hero = ({ onExploreClick }) => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center relative">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/assets/FullBoard3.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[0.4px]"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 text-center px-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex justify-center items-center mb-6"
          >
            <img
              src="/assets/Pace_Logo_White.svg"
              alt="Pace_Logo"
              className="h-23 md:h-42 w-auto object-contain" //h-20 md:h-40
            />
          </motion.div>

          {/* Divider with Star */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center justify-center space-x-4 my-6"
          >
            <hr className="w-12 md:w-16 border-gray-300" />
            <div className="text-xl md:text-2xl text-yellow-400 animate-pulse">★</div>
            <hr className="w-12 md:w-16 border-gray-300" />
          </motion.div>

          {/* Heading and Button Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-white py-6 text-center"
          >
            <h1 className="text-5xl font-bold mb-6">
              Welcome to <span className="font-semibold text-yellow-400">PACE</span>
            </h1>

            <Link to="/ComingSoon">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-xl transition duration-300"
              >
                Register for Prudence 2k25....
              </motion.button>
            </Link>
          </motion.section>

          {/* Description Text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-gray-200 mt-4 max-w-2xl mx-auto text-xs md:text-base leading-relaxed px-2"
          >
            Personality Advancement Circle of Engineers is a student organization started in 1994...
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default Hero;
