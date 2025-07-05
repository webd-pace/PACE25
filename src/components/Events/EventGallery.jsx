import React, { useState } from "react";

// Dummy event data
const eventData = {
  "2024": [
    {
      title: "Prudence 2k24",
      desc: "Mock interviews for real-world preparation.",
      img: "/assets/aspire-2024.jpg",
      winners: ["Team Alpha", "Team Beta", "Team Gamma"],
      gallery: [
        "/assets/aspire-2024.jpg",
        "/assets/aspire-2024b.jpg",
        "/assets/aspire-2024c.jpg",
      ],
    },
     {
      title: "CSR 2k24",
      desc: "Social outreach events promoting ethical awareness.",
      img: "/assets/csr-2023.jpg",
      winners: ["Team CSR", "Group Hope"],
      gallery: [
        "/assets/csr-2023.jpg",
        "/assets/csr-2023b.jpg",
        "/assets/csr-2023c.jpg",
      ],
    },
    {
      title: "Campus Tour 2k24",
      desc: "Geopolitical simulation and diplomacy challenges.",
      img: "/assets/nitigya-2024.jpg",
      winners: ["Student X", "Student Y"],
      gallery: ["/assets/nitigya-2024.jpg"],
    },
    {
      title: "PAT 2k24",
      desc: "Skill-based assessment with a unique practical twist.",
      img: "/assets/csr-2023.jpg",
      winners: ["Winner A", "Winner B"],
      gallery: ["/assets/csr-2023.jpg"],
    },
  ],
  "2025": [
    {
      title: "Prudence 2k25",
      desc: "Mock interviews for real-world preparation.",
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
      desc: "Social outreach events promoting ethical awareness.",
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
      desc: "Geopolitical simulation and diplomacy challenges.",
      img: "/assets/nitigya-2024.jpg",
      winners: ["Student X", "Student Y"],
      gallery: ["/assets/nitigya-2024.jpg"],
    },
    {
      title: "PAT 2k25",
      desc: "Skill-based assessment with a unique practical twist.",
      img: "/assets/csr-2023.jpg",
      winners: ["Winner A", "Winner B"],
      gallery: ["/assets/csr-2023.jpg"],
    },
  ],
};

const EventGallery = ({ year }) => {
  const data = eventData[year] || [];
  const [selected, setSelected] = useState(null); // for main modal
  const [winnerEvent, setWinnerEvent] = useState(null);
  const [galleryImages, setGalleryImages] = useState(null);

  return (
    <>
      <div className="flex flex-col gap-16 max-w-6xl mx-auto px-4">
        {data.map((event, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-6 border border-yellow-500 rounded-2xl p-5 hover:shadow-yellow-400 shadow-md transition`}
          >
            <img
              src={event.img}
              alt={event.title}
              className="w-full md:w-1/2 h-60 object-cover rounded-xl"
            />
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-yellow-400 font-cinzel-decorative">
                {event.title}
              </h3>
              <p className="text-sm text-gray-300 mt-2">{event.desc}</p>

              {/* Buttons */}
              <div className="flex gap-4 mt-4">
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
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for selected event (full image + desc) */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-[#111] border border-yellow-500 rounded-xl p-6 max-w-3xl mx-4 text-white relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-4 text-yellow-400 text-2xl font-bold"
              onClick={() => setSelected(null)}
            >
              &times;
            </button>
            <img
              src={selected.img}
              alt={selected.title}
              className="w-full max-h-[70vh] object-contain rounded-md mb-4"
            />
            <h2 className="text-3xl text-yellow-400 font-cinzel-decorative">
              {selected.title}
            </h2>
            <p className="text-gray-300 mt-2">{selected.desc}</p>
          </div>
        </div>
      )}

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
