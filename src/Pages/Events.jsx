import React, { useState } from "react";
import YearSelector from "../components/Events/YearSelector";
import EventGallery from "../components/Events/EventGallery";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const Events = () => {
  const [selectedYear, setSelectedYear] = useState("2024");

  return (
    <>
      <Navbar />
      <div className="bg-black text-white min-h-screen py-20 px-4 overflow-hidden">
        
        {/* Header Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.9, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-extrabold text-yellow-400 uppercase font-cinzel-decorative">
            Events
          </h1>

          {/* Accent line below title */}
          <motion.div
            className="flex justify-center mt-6 mb-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="block w-24 h-1 bg-yellow-400 rounded-full"></span>
          </motion.div>

          {/* Subheading */}
          <motion.p
            className="mt-4 text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Browse through the highlights of different event years and relive the excitement.
          </motion.p>
        </motion.div>

        {/* Year Selector */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 70 }}
        >
          <YearSelector selectedYear={selectedYear} onChange={setSelectedYear} />
        </motion.div>

        {/* Event Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, type: "spring", stiffness: 60 }}
        >
          <EventGallery year={selectedYear} />
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Events;
