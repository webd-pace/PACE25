import React from 'react';

const Nitigya = () => {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl scale-80 font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500 uppercase tracking-widest font-cinzel-decorative">
          NITIGYA
        </h1>

        <img
          src="/assets/Standout.jpg"
          alt="NITIGYA"
          className="w-full h-72 object-cover rounded-xl mb-6"
        />
        <p className="text-gray-300 text-lg leading-relaxed">
          "Standout" is an immersive experience where participants face creative and
          unexpected adaptability challenges. This event is designed to test your wit,
          communication, and thinking under pressure in an engaging, high-stakes format.
        </p>
        {/* Add more sections here if needed */}
      </div>
    </div>
  );
};

export default Nitigya;
