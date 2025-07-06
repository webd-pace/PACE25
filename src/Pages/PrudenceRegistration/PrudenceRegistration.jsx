import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PreudenceRegistrationbase from "../../components/PreudenceRegistrationbase";

const PrudenceRegistration = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-5xl font-extrabold text-yellow-400 mb-6 font-cinzel-decorative">
          PRUDANCE 2K25
        </h1>
        <p className="text-5xl font-extrabold text-yellow-400 mb-6 ">
          Stay Tuned for the Upcoming Events !!
        </p>

        {/* Prudence Registration */}
        {/* <PreudenceRegistrationbase/> */}

      </div>
      <Footer />
    </>
  );
};
export default PrudenceRegistration;