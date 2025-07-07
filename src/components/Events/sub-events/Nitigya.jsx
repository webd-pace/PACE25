import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Navbar';
import Footer from '../../Footer';

const Nitigya = () => {
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
          Nitigya
        </h1>
        <div className="flex justify-center mt-6 mb-10">
          <span className="block w-24 h-1 bg-yellow-400 rounded-full"></span>
        </div>
        <br/>
        <br/>
        

        {/* Image */}
        <img
          src="/assets/Events/Nitigya1.jpg" // You may want to update this to the correct image for Ideathon
          alt="Nitigya"
          className="w-100 h-140 object-cover rounded-xl mb-6 border-4 border-orange-500"
        />

        <br/>
        <br/>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed">
          "<span className="font-semibold text-yellow-400 ">Nitigya</span>" is a three-round event centered on geopolitics, governance, and real-world decision-making. Participants engage in challenging rounds that test their understanding of international affairs, diplomatic thinking, and ethical reasoning. From policy-based scenarios to critical debates, each round pushes contestants to think like future administrators. Especially beneficial for MPSC/UPSC aspirants, Nitigya provides a platform to analyze global issues and sharpen their problem-solving and leadership skills.
        </p>
        <br/>
        <br/>

      </div>
    </div>
    <Footer />
    </>
  );
};

export default Nitigya;
