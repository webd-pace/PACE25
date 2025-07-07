import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar"; 
import Footer from "./Footer"; 

const ComingSoon = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-black flex items-center justify-center text-white px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500 mb-6">
          Coming Soon
        </h1>
        <br/><br/>
        <p className="text-gray-400 text-lg md:text-xl mb-10">
          This page is under development. We're working hard to bring you something awesome!
        </p>

        <Link
          to="/Events"
          className="inline-block px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition"
        >
          ← Back to Events
        </Link>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ComingSoon;
