import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

export const PreudenceRegistrationbase = ({ prudenceRef }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      title: "Aspire",
      img: "/assets/Events/Logos/Aspire.jpg",
      desc:
        "A mock placement drive simulating real campus interviews, bridging academics and industry.",
      moreDetails:
        "This event helps participants experience the real corporate selection process: resume shortlisting, group discussion, and personal interviews by industry professionals.",
      registrationLink: "https://wcepace.org.in/",
    },
    {
      title: "Nitigya",
      img: "/assets/Events/Logos/Nitigya.jpg",
      desc:
        "High-stakes geopolitical challenge on global politics, diplomacy, and policy-making.",
      moreDetails:
        "Challenge your intellect in simulated international crisis management, negotiations, and political strategy.",
      registrationLink: "https://wcepace.org.in/",
    },
    {
      title: "Standout",
      img: "/assets/Events/Logos/Standout.jpg",
      desc:
        "Creative themes and adaptability tests through immersive experiences.",
      moreDetails:
        "Perfect for those who want to stand out with creative confidence. Surprise prompts will showcase your personality.",
      registrationLink: "https://wcepace.org.in/",
    },
    {
      title: "Ideathon",
      img: "/assets/Events/Logos/Ideathon.jpg",
      desc:
        "Teams pitch innovative business ideas in a multi-stage competition.",
      moreDetails:
        "Bring your disruptive ideas! Includes idea validation, pitch deck creation, and presentation to real investors.",
      registrationLink: "https://wcepace.org.in/",
    },
  ];

  return (
    <>
      <Navbar />

      <section
        ref={prudenceRef}
        className="relative pt-16 pb-24 bg-black text-white overflow-hidden"
      >
        {/* Background Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url("/assets/prudence-bg.jpg")' }}
        ></div>


        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mb-12">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-extrabold text-yellow-400 mb-4"> Prudence 2K25
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }} className="text-lg text-gray-300 leading-relaxed">   
          Prudence is the flagship event series of PACE, designed to test and
          nurture your skills across multiple domains including innovation,
          diplomacy, creative expression, and business strategy. Join us in this
          intellectual extravaganza and showcase your potential through events like
          Aspire, Nitigya, Standout, and Ideathon.
          </motion.p>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            style={{ gridAutoRows: "min-content" }}
          >
            {events.map((ev) => {
              const isSelected = selectedEvent === ev.title;
              return (
                <AnimatePresence key={ev.title}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => {
                      setSelectedEvent(isSelected ? null : ev.title);
                      if (!isSelected) {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) =>
                      e.key === "Enter" &&
                      setSelectedEvent(isSelected ? null : ev.title)
                    }
                    className={`group cursor-pointer relative bg-black border border-yellow-400 rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02] ${
                      isSelected ? "ring-2 ring-yellow-400" : ""
                    }`}
                  >
                    {/* Image */}
                    <div className="relative">
                      <img
                        src={ev.img}
                        alt={ev.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    </div>

                    {/* Text Content */}
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-yellow-300 mb-2">
                        {ev.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {isSelected ? ev.moreDetails : ev.desc}
                      </p>

                      {isSelected && (
                        <motion.div
                          key="details"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="mt-4"
                        >
                          <a
                            href={ev.registrationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 mt-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition"
                          >
                            Register
                          </a>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PreudenceRegistrationbase;
