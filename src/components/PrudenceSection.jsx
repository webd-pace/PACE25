import React from 'react';
import { useEffect, useRef } from "react";
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
      {/* Background decorative circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-yellow-500 opacity-10 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-20 -right-10 w-96 h-96 bg-yellow-500 opacity-10 rounded-full filter blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Gradient Heading */}
        <h2 className="text-5xl md:text-6xl scale-80 font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500 uppercase tracking-widest font-cinzel-decorative">
          Prudence 2K24
        </h2>

        {/* Main PRUDENCE Image */}
        <div className="flex justify-center mt-6">
          <img
            src="/assets/prudence-24.png"
            alt="Prudence Main Banner"
            className="w-72 md:w-96 h-auto rounded-2xl border-4 object-contain"
          />
        </div>

        {/* Underline Accent */}
        <div className="flex justify-center mt-6">
          <span className="block w-24 h-1 bg-yellow-400 rounded-full"></span>
        </div>

        {/* Intro Text */}
        <p className="mt-8 text-gray-300 scale-90 text-center max-w-3xl mx-auto text-lg leading-relaxed">
          PRUDENCE is the National Level Management Fest organised by PACE since 2001,
          fostering managerial skills of youth in its Carnival of intellectuals. This year, it
          reached the <span className="font-semibold text-yellow-400">INTERNATIONAL LEVEL</span>,
          featuring tracks across economics, entrepreneurship, marketing, debate, politics,
          social responsibility, journalism, and more.
        </p>

        {/* Sub-Events Grid */}
        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 scale-80 lg:grid-cols-4 gap-10">
          {events.map((ev) => (
            <Link
              key={ev.title}
              to={`/events/${ev.title.toLowerCase()}`}
              className="relative group bg-gray-900 rounded-3xl overflow-hidden shadow-2xl
                         hover:shadow-yellow-500/40 transition-shadow duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={ev.img}
                  alt={ev.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="relative p-6">
                <h3 className="text-2xl font-semibold mb-2">
                  {ev.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
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
