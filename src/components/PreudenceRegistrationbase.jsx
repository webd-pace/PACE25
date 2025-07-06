import React, { useState } from 'react';

export const PreudenceRegistrationbase = ({ prudenceRef }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      title: "Aspire",
      img: "/assets/Events/Logos/Aspire.jpg",
      desc:
        "A mock placement drive simulating real campus interviews, bridging academics and industry.",
      moreDetails:
        "This event helps participants experience the real corporate selection process: resume shortlisting, group discussion, and personal interviews by industry professionals.",
      registrationLink: "https://your-registration-link.com/aspire",
    },
    {
      title: "Nitigya",
      img: "/assets/Events/Logos/Nitigya.jpg",
      desc:
        "High-stakes geopolitical challenge on global politics, diplomacy, and policy-making.",
      moreDetails:
        "Challenge your intellect in simulated international crisis management, negotiations, and political strategy.",
      registrationLink: "https://your-registration-link.com/nitigya",
    },
    {
      title: "Standout",
      img: "/assets/Events/Logos/Standout.jpg",
      desc:
        "Creative themes and adaptability tests through immersive experiences.",
      moreDetails:
        "Perfect for those who want to stand out with creative confidence. Surprise prompts will showcase your personality.",
      registrationLink: "https://your-registration-link.com/standout",
    },
    {
      title: "Ideathon",
      img: "/assets/Events/Logos/Ideathon.jpg",
      desc:
        "Teams pitch innovative business ideas in a multi-stage competition.",
      moreDetails:
        "Bring your disruptive ideas! Includes idea validation, pitch deck creation, and presentation to real investors.",
      registrationLink: "https://your-registration-link.com/ideathon",
    },
  ];

  return (
    <section
      ref={prudenceRef}
      className="relative pt-16 pb-24 bg-black text-white overflow-hidden"
    >
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: 'url("/assets/prudence-bg.jpg")' }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          style={{ gridAutoRows: "min-content" }} // this ensures independent heights
        >
          {events.map((ev) => {
            const isSelected = selectedEvent === ev.title;
            return (
              <div
                key={ev.title}
                onClick={() =>
                  setSelectedEvent(isSelected ? null : ev.title)
                }
                className={`group cursor-pointer relative bg-black border border-yellow-400 rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02] ${
                  isSelected ? "ring-2 ring-yellow-400" : ""
                }`}
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={ev.img}
                    alt={ev.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>

                {/* Text Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-yellow-300 mb-2">
                    {ev.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {isSelected ? ev.moreDetails : ev.desc}
                  </p>

                  {isSelected && (
                    <div className="mt-4 animate-fadeIn">
                      <a
                        href={ev.registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 mt-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition"
                      >
                        Register
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PreudenceRegistrationbase;
