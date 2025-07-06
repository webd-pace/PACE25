import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PreudenceRegistrationbase from "../../components/PreudenceRegistrationbase";

const PrudenceRegistration = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center py-20 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-yellow-400 mb-4 font-cinzel-decorative">
          PRUDANCE 2K25
        </h1>
        <p className="text-0.5xl md:text-3xl font-semibold text-yellow-400 mb-6">
          Exciting things are coming <br/>— stay tuned for what’s next! 
        </p>

        {/* Prudence Registration */}
        {/* <PreudenceRegistrationbase/> */}
      </div>
      <Footer />
    </>
  );
};

export default PrudenceRegistration;
