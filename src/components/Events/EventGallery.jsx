import React, { useState } from "react";
import PrudenceSection from "../PrudenceSection.jsx";

const eventData = {
  "2024": [
    {
      title: "Prudence 2k24",
      desc: "PRUDENCE includes sectors of professional life, right from economics, entrepreneurship, marketing, debate, national international politics and governance, social responsibilities, journalism, environment, etc.",
      img: "/assets/Events/Logos/Prudence.jpg",
      gallery: [
        "/assets/Events/Ideathon3.jpg",
        "/assets/Events/Nitigya1.jpg",
        "/assets/Events/Standout2.jpg",
      ],
    },
    {
      title: "CSR 2k24",
      desc: "Every year PACE conducts CSR which is an event exclusively aiming to conduct social activities to benefit the less privileged people around Sangli.",
      img: "/assets/Events/Logos/CSR.jpg",
      gallery: [
        "/assets/Events/CSR1.jpg",
        "/assets/Events/CSR2.jpg",
        "/assets/Events/CSR3.jpg",
      ],
    },
    {
      title: "Campus Tour 2k24",
      desc: "Every year PACE Conducts campus tour for the first year students to give an amazing start to the wonderful journey of four years in this campus.",
      img: "/assets/Events/Logos/Campus Tour.jpg",
      gallery: [
        "/assets/Events/Campus Tour 1.jpg",
        "/assets/Events/Campus Tour 3.jpg",
        "/assets/Events/Campus Tour 4.jpg",
      ],
    },
    {
      title: "PAT 2k24",
      desc: "PACE APTITUDE TEST: A regular test series designed to evaluate and enhance students’ aptitude skills.",
      img: "/assets/Events/Logos/PAT.jpg",
      gallery: [
        "/assets/Events/PAT1.jpg",
        "/assets/Events/PAT2.jpg",
        "/assets/Events/PAT3.jpg",
      ],
    },
  ],
  "2025": [
    {
      title: "Coming Soon !!",
      desc: "The Website is under construction. Stay tuned for updates.",
      img: "/assets/aspire-2024.jpg",
    },
  ],
};

const EventDetails = {
  "Prudence 2k24": <PrudenceSection />,
  "CSR 2k24": (
    <div className="text-gray-300 text-center max-w-3xl mx-auto text-lg leading-relaxed mb-10">
      CSR (CORPORATE SOCIAL RESPONSIBILITY)
      <br />
      <br />
      Every year PACE conducts CSR, aiming to conduct social activities to benefit the less privileged people around Sangli. It facilitates students with the opportunity to do something for society.
    </div>
  ),
  "Campus Tour 2k24": (
    <div className="text-gray-300 text-center max-w-3xl mx-auto text-lg leading-relaxed mb-10">
      CAMPUS TOUR
      <br />
      <br />
      A guided event for first-year students to help them begin their 4-year journey on the right foot.
    </div>
  ),
  "PAT 2k24": (
    <div className="text-gray-300 text-center max-w-3xl mx-auto text-lg leading-relaxed mb-10">
      PAT (PACE APTITUDE TEST)
      <br />
      <br />
      A regular test series to evaluate and enhance aptitude skills with post-test discussions.
    </div>
  ),
};

const EventGallery = ({ year }) => {
  const data = eventData[year] || [];
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
              className={`flex flex-col gap-10 border border-yellow-500 rounded-2xl p-5 shadow-md transition duration-300 ease-in-out overflow-hidden ${
                isExpanded ? "bg-black bg-opacity-90" : "hover:bg-black/30"
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
                    {event.gallery && (
                      <button
                        onClick={() => setGalleryImages(event.gallery)}
                        className="px-4 py-2 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition"
                      >
                        Gallery
                      </button>
                    )}
                    {EventDetails[event.title] && (
                      <button
                        onClick={() =>
                          setExpandedIndex(isExpanded ? null : i)
                        }
                        className="px-4 py-2 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition"
                      >
                        {isExpanded ? "Hide Details" : "View More"}
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {isExpanded && (
                <div className="mt-6 border-t border-yellow-700 pt-6">
                  {EventDetails[event.title]}
                </div>
              )}
            </div>
          );
        })}
      </div>

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
