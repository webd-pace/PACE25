import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sponsors = [
  {
    name: "WANUSE",
    logo: "/assets/Sponsors/Title Sponsor.jpg",
    link: "#",
    category: "Title Sponsor",
  },
  {
    name: "Curry Palette",
    logo: "/assets/Sponsors/Food Partner.jpg",
    link: "#",
    category: "Food Partner",
  },
  {
    name: "Unique Academy",
    logo: "/assets/Sponsors/Educational Partner.jpg",
    link: "#",
    category: "Educational Partner",
  },
  {
    name: "Crazy Ice-Cream",
    logo: "/assets/Sponsors/Refreshment Partner.jpg",
    link: "#",
    category: "Refreshment Partner",
  },
  {
    name: "Sakal",
    logo: "/assets/Sponsors/Media Partner.jpg",
    link: "#",
    category: "Media Partner",
  },
];

function SponsorSectionB() {
  const settings = {
    dots: true,             // show navigation dots
    infinite: true,         // infinite loop
    speed: 800,             // transition speed
    slidesToShow: 1,        // number of sponsors visible
    slidesToScroll: 1,
    autoplay: true,         // auto slide
    autoplaySpeed: 2500,    // 2.5s per slide
    arrows: false,           // left/right arrows
  };

  return (
    <section className="py-16 bg-black mb-8">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-yellow-500 mb-4 tracking-wide">
          Our Sponsors
        </h2>

        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          We are proud to be supported by our amazing partners who make this
          event possible.
        </p>

        {/* Slider */}
        <Slider {...settings}>
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Frame with logo */}
              <a
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-72 h-48 flex justify-center items-center bg-[#0a0a0a] 
                           border border-yellow-500 rounded-xl shadow-lg 
                           hover:shadow-yellow-500/40 hover:scale-110 
                           transition-all duration-300 p-6 mx-auto"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-full max-w-full object-contain"
                />
              </a>

              {/* Role outside the frame */}
              <p className="text-xl text-yellow-400 font-semibold mt-4">
                {sponsor.category}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default SponsorSectionB;
