import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ThankYou = () => {
  const [showMessage, setShowMessage] = useState(true);

  return (
    <>
      <Navbar />
      <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center py-20 px-4">
        {showMessage && (
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-5xl font-extrabold text-yellow-400 mb-6" font-cinzel-decorative> 
                Thank You for Registering!.
            </h1>
            <br/>    <br/>
            <h1 className="text-5xl font-semibold text-yellow-400 mb-6">
               Your registration has been successfullly completed!
            </h1>
            <p className="text-xl mb-8">
            We will Contact you soon!!.
            <br />
            Stay tuned for updates and upcoming events.
            </p>
            <Link to="/">
              <button
                onClick={() => setShowMessage(false)}
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-xl transition duration-300"
              >
                Go to Home
              </button>
            </Link>

            <br />
            <br />
            <Link to="/PrudenceRegistration">
              <button
                onClick={() => setShowMessage(false)}
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-xl transition duration-300"
              >
                Fill Another Response
              </button>
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
export default ThankYou;