import React from 'react';

export const PrudenceSection = ({ prudenceRef }) => {
  const events = [
    {
      title: "Aspire",
      img: "/assets/Events/Logos/Aspire.jpg",
      desc:
        "A mock placement drive simulating real campus interviews, with Expert & Novice tracks bridging academics and industry.",
    },
    {
      title: "Nitigya",
      img: "assets/Events/Logos/Nitigya.jpg",
      desc:
        "High-stakes geopolitical challenge with three intense rounds on global politics, diplomacy, and policy-making.",
    },
    {
      title: "Standout",
      img: "/assets/Events/Logos/Standout.jpg",
      desc:
        "Creative themes and unexpected adaptability tests that leave a lasting impression through immersive experiences.",
    },
    {
      title: "Ideathon",
      img: "/assets/Events/Logos/Ideathon.jpg",
      desc:
        "Teams pitch innovative business ideas in a multi-stage competition to ignite entrepreneurial spirit.",
    },
  ];

  return (
    <section
      ref={prudenceRef}
      className="pt-10 pb-24 bg-black text-white overflow-hidden"
    >
      {/* Optional Background */}
      {/* <div className="absolute inset-0 bg-cover bg-center z-0 opacity-60"
        style={{ backgroundImage: 'url("/assets/prudence-bg.jpg")' }}
      ></div> */}

      <div className="relative z-20 max-w-7xl mx-auto px-4">
        {/* Description */}
        <p className="text-gray-200 text-center max-w-3xl mx-auto text-lg leading-relaxed mb-10">
          Since 2001, PACE has The Legacy of organizing a unique mega-event Prudence. It is a <span className="font-semibold text-yellow-400 ">National-level mega event of PACE</span> which is dynamic and changing every year based on current trends and necessities under which multiple events are conducted that focus on showcasing, improving and learning new skills in non-technical segments.
          <br /> <br />         
          <span className="font-semibold text-yellow-400 font-cinzel-decorative">PRUDENCE</span> includes sectors of professional life, right from economics, entrepreneurship, marketing, debate, national international politics and governance, social responsibilities, journalism, environment, etc.
        </p>

        {/* Sub-Events */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((ev) => (
            <div
              key={ev.title}
              className="relative group bg-black bg-opacity-60 border border-yellow-400 rounded-3xl overflow-hidden shadow-lg hover:shadow-yellow-400/40 transform hover:scale-105 transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={ev.img}
                  alt={ev.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-yellow-300 mb-2">
                  {ev.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {ev.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrudenceSection;
