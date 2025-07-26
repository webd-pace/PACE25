import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const PrudenceSection = ({ prudenceRef }) => {
  const navigate = useNavigate();

  const events = [
    {
      title: "Aspire",
      img: "/assets/Events/Logos/Aspire.jpg",
      desc:
        "A mock placement drive simulating real campus interviews, with Expert & Novice tracks bridging academics and industry.",
    },
    {
      title: "Nitigya",
      img: "assets/Events/Logos/Nitigya.jpg",
      desc:
        "High-stakes geopolitical challenge with three intense rounds on global politics, diplomacy, and policy-making.",
    },
    {
      title: "Standout",
      img: "/assets/Events/Logos/Standout.jpg",
      desc:
        "Creative themes and unexpected adaptability tests that leave a lasting impression through immersive experiences.",
    },
    {
      title: "Ideathon",
      img: "/assets/Events/Logos/Ideathon.jpg",
      desc:
        "Teams pitch innovative business ideas in a multi-stage competition to ignite entrepreneurial spirit.",
    },
  ];

  const handleCardClick = (title) => {
    const slug = title.toLowerCase().replace(/\s+/g, '');
    navigate(`/Events/sub-events/${slug}`);
  };

  return (
    <section
      ref={prudenceRef}
      className="pt-10 pb-24 bg-black text-white overflow-hidden"
    >
      <div className="relative z-20 max-w-7xl mx-auto px-4">
        <p className="text-gray-200 text-center max-w-3xl mx-auto text-lg leading-relaxed mb-10">
          Since 2001, PACE has The Legacy of organizing a unique mega-event Prudence. It is a <span className="font-semibold text-yellow-400 ">National-level mega event of PACE</span> which is dynamic and changing every year based on current trends and necessities under which multiple events are conducted that focus on showcasing, improving and learning new skills in non-technical segments.
          <br /> <br />
          <span className="font-semibold text-yellow-400 font-cinzel-decorative">PRUDENCE</span> includes sectors of professional life, right from economics, entrepreneurship, marketing, debate, national international politics and governance, social responsibilities, journalism, environment, etc.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((ev, index) => (
            <motion.div
              key={ev.title}
              onClick={() => handleCardClick(ev.title)}
              className="cursor-pointer relative group bg-black bg-opacity-60 border border-yellow-400 rounded-3xl overflow-hidden shadow-lg hover:shadow-yellow-400/40 transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <div className="overflow-hidden">
                <img
                  src={ev.img}
                  alt={ev.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-yellow-300 mb-2">
                  {ev.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {ev.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrudenceSection;
