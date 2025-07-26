import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const events = [
  {
    title: "Prudence",
    img: "/assets/Events/Logos/Prudence.jpg",
    desc: "National level fest fostering managerial intellect since 2001.",
  },
  {
    title: "CSR",
    img: "/assets/Events/Logos/CSR.jpg",
    desc: "Promotes social responsibility and ethical leadership through impactful outreach.",
  },
  {
    title: "PAT",
    img: "/assets/Events/Logos/PAT.jpg",
    desc: "Placement preparation assessments simulating aptitude and technical rounds.",
  },
  {
    title: "Campus Tour",
    img: "/assets/Events/Logos/Campus Tour.jpg",
    desc: "Explore our vibrant campus, its culture, and engage with student mentors.",
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const EventSection_Homepage = () => {
  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
      {/* Glow background elements */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-yellow-500 opacity-20 rounded-full filter blur-3xl z-0"></div>
      <div className="absolute -bottom-24 -right-20 w-96 h-96 bg-yellow-500 opacity-20 rounded-full filter blur-3xl z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold text-center text-yellow-400 uppercase tracking-wider font-cinzel-decorative"
        >
          Events
        </motion.h2>

        {/* Accent Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.3 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center mt-6 mb-10 origin-center"
        >
          <span className="block w-[200px] h-1 bg-yellow-400 rounded-full"></span>
        </motion.div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-black border border-yellow-400 rounded-3xl overflow-hidden shadow-lg hover:shadow-yellow-400/40 transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-yellow-300 font-cinzel-decorative">
                  {event.title}
                </h3>
                <p className="mt-2 text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {event.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link to="/Events">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full shadow-md transition-all duration-300">
              Explore the Details
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default EventSection_Homepage;
