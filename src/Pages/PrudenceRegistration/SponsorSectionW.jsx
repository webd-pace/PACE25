import React from "react";
import { motion } from "framer-motion";

const sponsors = [
  // {
  //   name: "Azure",
  //   logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
  //   link: "https://azure.microsoft.com/",
  // },
];

function SponsorSectionW() {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Sponsors
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We are proud to be supported by industry leaders who make this event possible.
        </motion.p>

        {/* Sponsor Logos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {sponsors.map((sponsor, index) => (
            <motion.a
              key={index}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-48 h-28 flex justify-center items-center bg-white rounded-xl shadow-md hover:shadow-xl transition"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-12 max-w-[150px] object-contain"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SponsorSectionW;
