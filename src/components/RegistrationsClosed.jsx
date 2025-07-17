import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const RegistrationsClosed = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black flex items-center justify-center text-white px-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500 mb-6">
            Registrations Closed
          </h1>
          <br /><br />
          <p className="text-gray-400 text-lg md:text-xl mb-6">
            The PACE registration form is now closed. We truly appreciate your interest. Keep an eye on our socials for upcoming opportunities and events!
          </p>

          <p className="text-gray-300 text-md md:text-lg mb-4">
                For any queries or support, please reach out to:
            </p>
        <div className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 mx-auto w-fit text-left space-y-2">
            <div className="flex items-center gap-2">
                <span className="text-pink-400 text-lg">📞</span>
                <span>Vishvajeet Pawar – +91 7887739590</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-pink-400 text-lg">📞</span>
                <span>Prasad Bedge – +91 9307286697</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-pink-400 text-lg">📞</span>
                <span>Pranav Patil – +91 8767939192</span>
                </div>
            <div className="flex items-center gap-2">
                <span className="text-pink-400 text-lg">✉️</span>
                <a href="mailto:pacesecretary10@gmail.com"className=" hover:text-blue-400">
                    pacesecretary10@gmail.com
                </a>
  </div>
</div>

         

          <Link
            to="/"
            className="inline-block px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegistrationsClosed;
