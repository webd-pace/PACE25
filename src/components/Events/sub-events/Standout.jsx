import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Navbar';
import Footer from '../../Footer';

const Standout = () => {
  const navigate = useNavigate();

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-black text-white p-10">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-yellow-400 hover:text-yellow-300 font-semibold transition"
        >
          ← Back
        </button>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl scale-80 font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500 uppercase tracking-widest font-cinzel-decorative">
          Standout
        </h1>
        <div className="flex justify-center mt-6 mb-10">
          <span className="block w-24 h-1 bg-yellow-400 rounded-full"></span>
        </div>
        <br/>
        <br/>
        

        {/* Image */}
        <img
          src="/assets/Events/Standout2.jpg" // You may want to update this to the correct image for Ideathon
          alt="Standout"
          className="w-100 h-140 object-cover rounded-xl mb-6 border-4 border-orange-500"
        />

        <br/>
        <br/>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed">
          "<span className="font-semibold text-yellow-400 ">Standout</span>" is a First-Year exclusive event designed to uncover and nurture the hidden potential of freshers. Through multiple screening rounds, participants are assessed and compared based on various aspects of their personality. The event tests communication, presence of mind, and confidence. It aims to boost self-awareness and helps first-year students take their first step toward personal and professional growth.
        </p>
        <br/>
        <br/>

      </div>
    </div>
    <Footer />
    </>
  );
};

export default Standout;
