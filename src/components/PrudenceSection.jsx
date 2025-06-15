import React from 'react';
import { Link } from "react-router-dom";

export const PrudenceSection = ({ prudenceRef }) => {
  const events = [
    {
      title: "Aspire",
      img: "/assets/Aspire.jpg",
      desc:
        "A mock placement drive simulating real campus interviews, with Expert & Novice tracks bridging academics and industry.",
    },
    {
      title: "Nitigya",
      img: "/assets/Nitigya.jpg",
      desc:
        "High-stakes geopolitical challenge with three intense rounds on global politics, diplomacy, and policy-making.",
    },
    {
      title: "Standout",
      img: "/assets/Standout.jpg",
      desc:
        "Creative themes and unexpected adaptability tests that leave a lasting impression through immersive experiences.",
    },
    {
      title: "Ideathon",
      img: "/assets/Ideathon.jpg",
      desc:
        "Teams pitch innovative business ideas in a multi-stage competition to ignite entrepreneurial spirit.",
    },
  ];

  return (
    <section
      ref={prudenceRef}
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      {/* Clear Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-60"
        style={{ backgroundImage: 'url("/assets/prudence-bg.jpg")' }} // use your high-res background here
      ></div>

      {/* Yellow Circle Glow Decorations */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-yellow-500 opacity-20 rounded-full filter blur-3xl z-10"></div>
      <div className="absolute -bottom-20 -right-10 w-96 h-96 bg-yellow-500 opacity-20 rounded-full filter blur-3xl z-10"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-center text-yellow-400 uppercase tracking-wider font-cinzel-decorative">
          Prudence 2K24
        </h2>

        {/* Banner Image */}
        <div className="flex justify-center mt-6">
          <img
            src="/assets/prudence-24.png"
            alt="Prudence Main Banner"
            className="w-72 md:w-96 h-auto rounded-2xl border-4 border-yellow-400 object-contain"
          />
        </div>

        {/* Accent Line */}
        <div className="flex justify-center mt-6">
          <span className="block w-24 h-1 bg-yellow-400 rounded-full"></span>
        </div>

        {/* Description */}
        <p className="mt-8 text-gray-200 text-center max-w-3xl mx-auto text-lg leading-relaxed">
          PRUDENCE is the National Level Management Fest organised by PACE since 2001,
          fostering managerial skills of youth in its Carnival of intellectuals. This year, it
          reached the <span className="font-semibold text-yellow-400">INTERNATIONAL LEVEL</span>,
          featuring tracks across economics, entrepreneurship, marketing, debate, politics,
          social responsibility, journalism, and more.
        </p>

        {/* Sub-Events */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {events.map((ev) => (
            <Link
              key={ev.title}
              to={`/events/${ev.title.toLowerCase()}`}
              className="relative group bg-black bg-opacity-60 border border-yellow-400 rounded-3xl overflow-hidden shadow-lg hover:shadow-yellow-400/40 transform hover:scale-105 transition-all duration-300"
            >
              {/* Event Image */}
              <div className="overflow-hidden">
                <img
                  src={ev.img}
                  alt={ev.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Event Text */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-yellow-300 mb-2">
                  {ev.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {ev.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
