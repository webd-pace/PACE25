import React, { useState } from "react";
const eventData = {
  "2024": [
    {
      title: "Prudnce 2k24",
      desc: "Mock interviews for real-world preparation.",
      img: "/assets/aspire-2024.jpg",
    },
    {
      title: "Campus Tour 2k24",
      desc: "Geopolitical simulation and diplomacy challenges.",
      img: "/assets/nitigya-2024.jpg",
    },
    {
      title: "CSR 2k24",
      desc: "Social outreach events promoting ethical awareness.",
      img: "/assets/csr-2023.jpg",
    },
    {
      title: "PAT",
      desc: "Social outreach events promoting ethical awareness.",
      img: "/assets/csr-2023.jpg",
    },
  ],
  "2025": [
    {
      title: "Prudnce 2k25",
      desc: "Mock interviews for real-world preparation.",
      img: "/assets/aspire-2024.jpg",
    },
    {
      title: "Campus Tour 2k25",
      desc: "Geopolitical simulation and diplomacy challenges.",
      img: "/assets/nitigya-2024.jpg",
    },
    {
      title: "CSR 2k25",
      desc: "Social outreach events promoting ethical awareness.",
      img: "/assets/csr-2023.jpg",
    },
    {
      title: "PAT 2k25",
      desc: "Social outreach events promoting ethical awareness.",
      img: "/assets/csr-2023.jpg",
    },
  ],
//   "2022": [
//     {
//       title: "Campus Tour",
//       desc: "Walkthrough of the college to connect with future aspirants.",
//       img: "/assets/campustour-2022.jpg",
//     },
//   ],
};

const EventGallery = ({ year }) => {
  const data = eventData[year] || [];
  const [selected, setSelected] = useState(null);

  return (
    <>
      {/* Gallery */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {data.map((event, i) => (
          <div
            key={i}
            className="border border-yellow-500 rounded-2xl p-5 hover:shadow-yellow-400 shadow-md transition cursor-pointer"
            onClick={() => setSelected(event)}
          >
            <img
              src={event.img}
              alt={event.title}
              className="w-full h-60 object-cover rounded-xl mb-4"
            />
            <h3 className="text-2xl font-bold text-yellow-400 font-cinzel-decorative">
              {event.title}
            </h3>
            <p className="text-sm text-gray-300 mt-2">{event.desc}</p>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-[#111] border border-yellow-500 rounded-xl p-6 max-w-3xl mx-4 text-white relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-4 text-yellow-400 text-2xl font-bold"
              onClick={() => setSelected(null)}
            >
              &times;
            </button>

            <img
              src={selected.img}
              alt={selected.title}
              className="w-full h-96 object-cover rounded-md mb-4"
            />
            <h2 className="text-3xl text-yellow-400 font-cinzel-decorative">
              {selected.title}
            </h2>
            <p className="text-gray-300 mt-2">{selected.desc}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default EventGallery;
