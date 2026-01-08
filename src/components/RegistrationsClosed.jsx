import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const RegistrationsClosed = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black flex items-center justify-center text-white px-4">
        <motion.div
          className="text-center max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500 mb-6">
            Registrations Closed
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mb-6">
            The Registration for Prudence 2k25 are officially closed. We
            appreciate your interest and enthusiasm!
          </p>

          <p className="text-gray-300 text-md md:text-lg mb-4">
            For further queries or support, please reach out to:
          </p>

          <div className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 mx-auto w-fit text-left space-y-2">
            {[
              { icon: "📞", text: "Vishvajeet Pawar – +91 7887739590" },
              { icon: "📞", text: "Prasad Bedge – +91 9307286697" },
              { icon: "📞", text: "Pranav Patil – +91 8767939192" },
              {
                icon: "✉️",
                text: (
                  <a href="mailto:pacesecretary10@gmail.com" className="hover:text-blue-400">
                    pacesecretary10@gmail.com
                  </a>
                ),
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-pink-400 text-lg">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/"
              className="inline-block px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition"
            >
              ← Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default RegistrationsClosed;
