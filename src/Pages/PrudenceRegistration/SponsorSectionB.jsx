import React from "react";
import { motion } from "framer-motion";

const sponsors = [

  // {
  //   name: "Azure",
  //   logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
  //   link: "https://azure.microsoft.com/",
  // },
];

function SponsorSectionB() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-yellow-500 mb-4 tracking-wide"
        >
          Our Sponsors
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          We are proud to be supported by industry leaders who make this event possible.
        </motion.p>

        {/* Sponsor Logos Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          {sponsors.map((sponsor, index) => (
            <motion.a
              key={index}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-44 h-24 flex justify-center items-center bg-[#0a0a0a] border border-yellow-500 rounded-lg shadow-lg hover:shadow-yellow-500/40 hover:scale-110 transition-all duration-300"
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-12 max-w-[120px] object-contain"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default SponsorSectionB;
