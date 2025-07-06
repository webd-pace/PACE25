// components/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export const Hero = ({ onExploreClick }) => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center relative">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/assets/FullBoard.jpg')`,
            backgroundSize: 'cover',

            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[0.4px]"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 text-center px-4">
          {/* Top Left Text */}
          <div className="absolute top-5 left-5 text-xs md:text-sm font-light tracking-widest text-white">

          </div>

          {/* Logo and Main Content */}
          <div className="flex justify-center items-center mb-6">
            <img
              src="/assets/Pace_Logo3.svg"
              alt="Pace_Logo"
              className="h-23 md:h-42 w-auto object-contain" //h-20 md:h-40
            />
          </div>



          {/* Divider with star */}
          <div className="flex items-center justify-center space-x-4 my-6">
            <hr className="w-12 md:w-16 border-gray-300" />
            <div className="text-xl md:text-2xl text-yellow-400 animate-pulse">★</div>
            <hr className="w-12 md:w-16 border-gray-300" />
          </div>

          {/*Top Right Button*/}
          <section className=" text-white py-23.8 text-center ">
            <h1 className="text-5xl font-bold mb-6">Welcome to <span className="font-semibold text-yellow-400 font-cinzel-decorative">PACE</span> </h1>
            <p className="text-xl mb-10 ">Scaling Heights Since 1994</p>
            
            {/* Join Now Button */}
            <Link to="/JoinForm">
              <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-xl transition duration-300">
                Join Now
              </button>
            </Link>
            <br/>
            <br/>
            {/* Prudance Registration Now Button */}
            <Link to="/PrudenceRegistration">
              <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-xl transition duration-300">
                Register for Prudence 2k25....
              </button>
            </Link>
          </section>
          
           {/* Description */}
          <p className="text-gray-200 mt-4 max-w-2xl mx-auto text-xs md:text-base leading-relaxed px-2">
            Personality Advancement Circle of Engineers is a student organization started in 1994...
          </p>

         
          {/* Explore Events Button */}
          {/* <button
            onClick={onExploreClick}
            className="mt-8 px-5 py-2 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition text-xs md:text-base"
          >
            Explore Events
          </button> */}

          {/* Scroll Down Animation */}
          {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 animate-bounce">
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-yellow-400"></div>
          <p className="text-[10px] md:text-xs text-gray-300">Scroll Down</p>
        </div> */}
        </div>
      </div>
    </>

  );
};