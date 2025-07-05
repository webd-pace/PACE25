import React, { useState } from "react";
import YearSelector from "../components/Events/YearSelector";
import EventGallery from "../components/Events/EventGallery";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Events = () => {
  const [selectedYear, setSelectedYear] = useState("2024");

  return (
    <>
    <Navbar />
    <div className="bg-black text-white min-h-screen py-20 px-4">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-yellow-400 uppercase font-cinzel-decorative">
          Events
        </h1>
        
        { /* Accent line below the title */}
        <div className="flex justify-center mt-6 mb-10">
          <span className="block w-24 h-1 bg-yellow-400 rounded-full"></span>
        </div>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Browse through the highlights of different event years and relive the excitement.
        </p>
      </div>

      <YearSelector selectedYear={selectedYear} onChange={setSelectedYear} />
      <EventGallery year={selectedYear} />
    </div>
    <Footer />
    </>
  );
};

export default Events;
