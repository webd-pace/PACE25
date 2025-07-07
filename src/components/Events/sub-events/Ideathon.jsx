import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Navbar';
import Footer from '../../Footer';

const Ideathon = () => {
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
          IDEATHON
        </h1>
        <div className="flex justify-center mt-6 mb-10">
          <span className="block w-24 h-1 bg-yellow-400 rounded-full"></span>
        </div>
        <br/>
        <br/>
        

        {/* Image */}
        <img
          src="/assets/Events/Ideathon3.jpg" // You may want to update this to the correct image for Ideathon
          alt="IDEATHON"
          className="w-100 h-140 object-cover rounded-xl mb-6 border-4 border-orange-500"
        />

        <br/>
        <br/>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed">
          "<span className="font-semibold text-yellow-400 ">Ideathon</span>" is a platform for innovators and changemakers. Teams come together to pitch impactful ideas on social, technical, or environmental issues. With a focus on execution and feasibility, participants not only present their ideas but also detail action plans, making this event a breeding ground for practical and scalable solutions.
        </p>
        <br/>
        <br/>

      </div>
    </div>
    <Footer />
    </>
  );
};

export default Ideathon;
