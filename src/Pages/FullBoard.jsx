// Pages/FullBoard.jsx
import React from "react";
import { boardMembersChief } from "../constants/boardMembers";
import Navbar from "../components/Navbar";

const FullBoard = () => {
  return (
    <>
      <Navbar />
      <section className="relative py-20 bg-black mt-5 text-white overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-yellow-500 opacity-10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 -right-10 w-96 h-96 bg-yellow-500 opacity-10 rounded-full filter blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4">
          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500 uppercase tracking-widest font-cinzel-decorative">
            Cheif Board 2k25
          </h2>

          {/* Underline */}
          <div className="flex justify-center mt-4">
            <span className="block w-20 h-1 bg-yellow-400 rounded-full"></span>
          </div>

          {/* Grid of Members */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {boardMembersChief.map((member) => (
              <div
                key={member.fullName}
                className="relative group bg-gray-900 border border-yellow-200 rounded-3xl overflow-hidden shadow-2xl hover:shadow-yellow-500/40 transform hover:scale-105 transition-all duration-300"
              >
                {/* Image */}
                <div className="overflow-hidden h-48 sm:h-64 md:h-72">
                  <img
                    src={member.imgUrl}
                    alt={member.fullName}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="relative p-6 text-center">
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                    {member.fullName}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {member.post}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FullBoard;
