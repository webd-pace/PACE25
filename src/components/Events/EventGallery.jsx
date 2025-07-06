import React, { useState } from "react";
import PrudenceSection from "../PrudenceSection.jsx"; // Ensure default export

const eventData = {
  "2024": [
    {
      title: "Prudence 2k24",
      desc: "PRUDENCE includes sectors of professional life, right from economics, entrepreneurship, marketing, debate, national international politics and governance, social responsibilities, journalism, environment, etc.",
      img: "/assets/aspire-2024.jpg",
      winners: ["Team Alpha", "Team Beta", "Team Gamma"],
      gallery: [
        "/assets/Events/Aspire2.jpg",
        "/assets/Events/Ideathon3.jpg",
        "/assets/Events/Nitigya1.jpg",
        "/assets/Events/Standout2.jpg",
      ],
    },
    {
      title: "CSR 2k24",
      desc: "Every year PACE conducts CSR which is an event exclusively aiming to conduct social activities to benefit the less privileged people around Sangli.",
      img: "/assets/Events/Logos/CSR.jpg",
      winners: ["Team CSR", "Group Hope"],
      gallery: [
        "/assets/Events/csr1.jpg",
        "/assets/Events/csr2.jpg",
        "/assets/Events/csr3.jpg",
      ],
    },
    {
      title: "Campus Tour 2k24",
      desc: "Every year PACE Conducts campus tour for the first year students to give an amazing start to the wonderful journey of  four years in this campus.",
      img: "/assets/Events/Logos/campus tour.jpg",
      winners: ["Student X", "Student Y"],
      gallery: [
        "/assets/Events/Campus Tour 1.jpg",
        "/assets/Events/Campus Tour 2.jpg",
        "/assets/Events/Campus Tour 3.jpg",
      ],
    },
    {
      title: "PAT 2k24",
      desc: "PACE APTITUDE TEST A regular test series designed to evaluate and enhance students’ aptitude skills",
      img: "/assets/Events/Logos/pat.jpg",
      winners: ["Winner A", "Winner B"],
      gallery: ["/assets/Events/pat1.jpg",
        "/assets/Events/pat3.jpg",
        "/assets/Events/pat2.jpg",
      ],
    },
  ],
  "2025": [
    {
      title: "Prudence 2k25",
      desc: "PRUDENCE includes sectors of professional life, right from economics, entrepreneurship, marketing, debate, national international politics and governance, social responsibilities, journalism, environment, etc.",
      img: "/assets/aspire-2024.jpg",
      winners: ["Team Alpha", "Team Beta", "Team Gamma"],
      gallery: [
        "/assets/aspire-2024.jpg",
        "/assets/aspire-2024b.jpg",
        "/assets/aspire-2024c.jpg",
      ],
    },
    {
      title: "CSR 2k25",
      desc: "Every year PACE conducts CSR which is an event exclusively aiming to conduct social activities to benefit the less privileged people around Sangli.",
      img: "/assets/csr-2023.jpg",
      winners: ["Team CSR", "Group Hope"],
      gallery: [
        "/assets/csr-2023.jpg",
        "/assets/csr-2023b.jpg",
        "/assets/csr-2023c.jpg",
      ],
    },
    {
      title: "Campus Tour 2k25",
      desc: "Every year PACE Conducts campus tour for the first year students to give an amazing start to the wonderful journey of  four years in this campus.",
      img: "/assets/nitigya-2024.jpg",
      winners: ["Student X", "Student Y"],
      gallery: ["/assets/nitigya-2024.jpg"],
    },
    {
      title: "PAT 2k25",
      desc: "PACE APTITUDE TEST A regular test series designed to evaluate and enhance students’ aptitude skills",
      img: "/assets/csr-2023.jpg",
      winners: ["Winner A", "Winner B"],
      gallery: ["/assets/csr-2023.jpg"],
    },
  ],
};

const EventDetails = { 
  "Prudence 2k24": <PrudenceSection />,
  "CSR 2k24": (
    <div className="text-gray-300">
      {/* <h4 className="text-yellow-400 font-semibold text-xl mb-2">About CSR</h4> */}
      <p text-gray-200 text-center max-w-3xl mx-auto text-lg leading-relaxed mb-10>
        CSR (CORPORATE SOCIAL RESPONSIBLITY)
        <br /><br />
        Every year PACE conducts CSR which is an event exclusively aiming to conduct social activities to benefit the less privileged people around Sangli.
        The main purpose of CSR is to facilitate students with the opportunity to do something for the society and less privilaged people
      </p>
    </div>
  ),
  "Campus Tour 2k24": (
    <div className="text-gray-300 " >
      {/* <h4 className="text-yellow-400 font-semibold text-xl mb-2">About Campus Tour</h4> */}
      <p text-gray-200 text-center max-w-3xl mx-auto text-lg leading-relaxed mb-10>
      CAMPUS TOUR
      <br/><br />
      Every year PACE Conducts campus tour for the first year students to give an amazing start to the wonderful journey of  four years in this campus.
      </p>
    </div>
  ),
  "PAT 2k24": (
    <div className="text-gray-300">
      {/* <h4 className="text-yellow-400 font-semibold text-xl mb-2">About PAT</h4> */}
      <p text-gray-200 text-center max-w-3xl mx-auto text-lg leading-relaxed mb-10> 
        PAT (PACE APTITUDE TEST)
        <br /><br />
         A regular test series designed to evaluate and enhance students’ aptitude skills. It simulates real exam conditions and is followed by discussions to improve conceptual clarity and time management.
      </p>
    </div>
    
  ),
};

const EventGallery = ({ year }) => {
  const data = eventData[year] || [];
  const [winnerEvent, setWinnerEvent] = useState(null);
  const [galleryImages, setGalleryImages] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <>
      <div className="flex flex-col gap-16 max-w-6xl mx-auto px-4">
        {data.map((event, i) => {
          const isExpanded = expandedIndex === i;
          return (
            <div
              key={i}
              className={`flex flex-col gap-6 border border-yellow-500 rounded-2xl p-5 shadow-md transition overflow-hidden ${
                isExpanded ? "bg-black bg-opacity-90" : ""
              }`}
            >
              <div
                className={`flex flex-col md:flex-row ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-6`}
              >
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full md:w-1/2 h-60 object-cover rounded-xl"
                />
                <div className="md:w-1/2">
                  <h3 className="text-3xl font-semibold text-yellow-400 font-cinzel-decorative">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-300 mt-2">{event.desc}</p>

                  <div className="flex flex-wrap gap-4 mt-4">
                    <button
                      onClick={() => setWinnerEvent(event)}
                      className="px-4 py-2 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition"
                    >
                      Winners
                    </button>
                    <button
                      onClick={() => setGalleryImages(event.gallery)}
                      className="px-4 py-2 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition"
                    >
                      Gallery
                    </button>
                    <button
                      onClick={() =>
                        setExpandedIndex(isExpanded ? null : i)
                      }
                      className="px-4 py-2 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition"
                    >
                      {isExpanded ? "Hide Details" : "View More"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Unique View More Content */}
              {isExpanded && (
                <div className="mt-6 border-t border-yellow-700 pt-6">
                  {EventDetails[event.title] || (
                    <p className="text-gray-400 italic">More details coming soon...</p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Winners Modal */}
      {winnerEvent && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setWinnerEvent(null)}
        >
          <div
            className="bg-[#111] border border-yellow-500 rounded-xl p-6 w-full max-w-md text-white relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-4 text-yellow-400 text-2xl font-bold"
              onClick={() => setWinnerEvent(null)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              {winnerEvent.title} - Winners
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {winnerEvent.winners?.map((winner, idx) => (
                <li key={idx}>{winner}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Gallery Modal */}
      {galleryImages && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 overflow-y-auto"
          onClick={() => setGalleryImages(null)}
        >
          <div
            className="bg-[#111] border border-yellow-500 rounded-xl p-6 w-full max-w-5xl text-white relative grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-4 text-yellow-400 text-2xl font-bold"
              onClick={() => setGalleryImages(null)}
            >
              &times;
            </button>
            {galleryImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Gallery ${index}`}
                className="rounded-lg object-cover w-full h-60"
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default EventGallery;