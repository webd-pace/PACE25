import { useEffect, useRef } from "react";

// Fill in actual member names in `fullName` as you get them

const boardMembersChief = [
  { post: "President",             fullName: "Vishwajeet Pawar",    imgUrl: "/assets/president.png" },
  { post: "Vice President",        fullName: "Prasad Bedage",      imgUrl: "/assets/vp.png"        },
  { post: "Secretary",             fullName: "Pranav Patil",       imgUrl: "/assets/sec.png"       },
  { post: "Chief PDE",             fullName: "Haripriya Yele",     imgUrl: "/assets/pde3.png"       },
  { post: "Chief PDE",             fullName: "Samruddhi Shinde",   imgUrl: "/assets/pde2.png"      },
  { post: "Chief PDE",             fullName: "Gayatri Patil",      imgUrl: "/assets/pde4.png"      },
  { post: "Chief PDE",             fullName: "Samarth Gaikwad",    imgUrl: "/assets/pde.png"      },
  { post: "Chief PDF",             fullName: "Chinmayi Bargale",   imgUrl: "/assets/pdf.png"       },
  // { post: "Chief PDF",             fullName: "Prasad Bedage",      imgUrl: "/assets/vp.png"       },
  { post: "Chief PDP",             fullName: "Juhi Zinage",        imgUrl: "/assets/pdp.png"       },
  { post: "Chief PDP",             fullName: "Sahil Badera",       imgUrl: "/assets/pdp2.png"      },
  { post: "Chief PDP",             fullName: "Sakshi Mehtre",      imgUrl: "/assets/pdp4.png"      },
  { post: "Chief PDP",             fullName: "Anchit Bagde",       imgUrl: "/assets/pdp3.png"      },
  { post: "Chief Skid-P",          fullName: "Piyush Dawkhare",    imgUrl: "/assets/skidp.png"     },
  { post: "Chief Skid-P",          fullName: "Manisha Shinde",     imgUrl: "/assets/skid6p2.png"    },
  { post: "Chief Skid-P",          fullName: "Dhanshri Mali",      imgUrl: "/assets/skidp.png"     },
  { post: "Chief Skid-P",          fullName: "Pratik Kapre",       imgUrl: "/assets/skidp2.png"    },
  // { post: "Chief Skid-W",          fullName: "Samruddhi Shinde",   imgUrl: "/assets/pdf.png"       },
  { post: "Creative Team Head",    fullName: "Rajvardhan Kadam",   imgUrl: "/assets/CTH.png"       },
  { post: "Creative Team Head",    fullName: "Chaitrali Jadhav",   imgUrl: "/assets/CTH2.png"      },
  { post: "Creative Team Head",    fullName: "Tanuja Beskar",      imgUrl: "/assets/CTH3.png"      },
  { post: "Chief Aptitude Developer", fullName: "Darshan Nandurge", imgUrl: "/assets/aptidev.png"   },
  // { post: "Chief Web Developer",   fullName: "Haripriya Yele",     imgUrl: "/assets/pdf.png"       },
  // { post: "Chief Web Developer",   fullName: "Piyush Dawkhare",    imgUrl: "/assets/pdf.png"       },
  { post: "Chief PACEr",           fullName: "Kalpesh Kamble",     imgUrl: "/assets/5pdf.png"       },
];

function BoardSection({ title, members }) {
  const containerRef = useRef(null);

  // auto-scroll every 3 seconds
  useEffect(() => {
    const el = containerRef.current;
    const scrollAmount = 300; // how much to scroll each time (px)
    const scrollDelay = 3000; // delay between scrolls (ms)

    const intervalId = setInterval(() => {
      if (!el) return;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth) {
        // if at end, reset
        el.scrollLeft = 0;
      } else {
        el.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, scrollDelay);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center uppercase tracking-wide text-yellow-400">
          {title}
        </h2>

        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar"
        >
          {members.map((m, i) => (
            <div
              key={i}
              className="
                snap-center
                flex-shrink-0
                w-64
                bg-transparent
                rounded-3xl
                p-6
                flex flex-col items-center
                text-center
                transition-all duration-300
                hover:scale-105
                hover:shadow-2xl
                hover:shadow-yellow-500/20
              "
            >
              {/* Profile Image */}
              <div className="relative mb-4">
                <img
                  src={m.imgUrl}
                  alt={m.post}
                  className="w-28 h-28 rounded-full object-cover ring-2 ring-yellow-400"
                />
              </div>

              {/* Decorative Accent */}
              <hr className="w-12 border-yellow-400 mb-3" />

              {/* Post and Name */}
              <h4 className="text-xs uppercase text-white opacity-70">{m.post}</h4>
              <h3 className="mt-1 text-lg font-bold text-white">{m.fullName}</h3>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          {/* <button className="px-6 py-2 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition">
            View Full Board
          </button> */}
        </div>
      </div>
    </section>
  );
}

function PrudenceSection({ prudenceRef }) {
  const events = [
    {
      title: "Aspire",
      img: "/assets/aspire.png",
      desc:
        "A mock placement drive simulating real campus interviews, with Expert & Novice tracks bridging academics and industry.",
    },
    {
      title: "Nitigya",
      img: "/assets/nitigya.png",
      desc:
        "High-stakes geopolitical challenge with three intense rounds on global politics, diplomacy, and policy-making.",
    },
    {
      title: "Standout",
      img: "/assets/standout.png",
      desc:
        "Creative themes and unexpected adaptability tests that leave a lasting impression through immersive experiences.",
    },
    {
      title: "Ideathon",
      img: "/assets/ideathon.png",
      desc:
        "Teams pitch innovative business ideas in a multi-stage competition to ignite entrepreneurial spirit.",
    },
  ];

  return (
    <section
      ref={prudenceRef}
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      {/* Background decorative circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-yellow-500 opacity-10 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-20 -right-10 w-96 h-96 bg-yellow-500 opacity-10 rounded-full filter blur-3xl"></div>
  
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Gradient Heading */}
        <h2 className="text-5xl md:text-6xl scale-80 font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500 uppercase tracking-widest">
          Prudence 2K24
        </h2>
  
        {/* NEW: Main PRUDENCE Image */}
        <div className="flex justify-center mt-6">
          <img
            src="/assets/prudence-24.png" // <== replace with your image path
            alt="Prudence Main Banner"
            className="w-72 md:w-96 h-auto rounded-2xl border-4 object-contain"
          />
        </div>
  
        {/* Underline Accent */}
        <div className="flex justify-center mt-6">
          <span className="block w-24 h-1 bg-yellow-400 rounded-full"></span>
        </div>
  
        {/* Intro Text */}
        <p className="mt-8 text-gray-300 scale-90 text-center max-w-3xl mx-auto text-lg leading-relaxed">
          PRUDENCE is the National Level Management Fest organised by PACE since 2001,
          fostering managerial skills of youth in its Carnival of intellectuals. This year, it
          reached the <span className="font-semibold text-yellow-400">INTERNATIONAL LEVEL</span>,
          featuring tracks across economics, entrepreneurship, marketing, debate, politics,
          social responsibility, journalism, and more.
        </p>
  
        {/* Sub-Events Grid */}
        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 scale-80 lg:grid-cols-4 gap-10">
          {events.map((ev) => (
            <div
              key={ev.title}
              className="relative group bg-gray-900 rounded-3xl overflow-hidden shadow-2xl
                         hover:shadow-yellow-500/40 transition-shadow duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={ev.img}
                  alt={ev.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
  
              {/* Glass panel overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm opacity-0 "></div>
  
              {/* Content */}
              <div className="relative p-6">
                <h3 className="text-2xl font-semibold mb-2 ">
                  {ev.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {ev.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
}


function Home() {
  const prudenceRef = useRef(null);

  const handleExploreClick = () => {
    if (prudenceRef.current) {
      prudenceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center relative">
        
        {/* Top Left Text */}
        <div className="absolute top-5 left-5 text-xs md:text-sm font-light tracking-widest">
          WCE Sangli
        </div>
  
        {/* Top Right Button */}
        <div className="absolute top-5 right-5 text-xs md:text-sm font-bold uppercase cursor-pointer hover:text-yellow-400 transition">
          Join Now
        </div>
  
        {/* Center Section */}
        <div className="text-center px-4">
          
          {/* Tagline */}
          <p className="text-gray-400 tracking-widest uppercase text-xs md:text-sm mb-4">
            Personality Advancement Circle Of Engineers
          </p>
  
          {/* Logo */}
          <div className="flex justify-center items-center mb-6">
            <img
              src="/PACE.png"
              alt="PACE Logo"
              className="h-24 md:h-40 w-auto object-contain" 
            />
          </div>
  
          {/* Divider with star */}
          <div className="flex items-center justify-center space-x-4 my-6">
            <hr className="w-12 md:w-16 border-gray-500" />
            <div className="text-xl md:text-2xl text-yellow-400 animate-pulse">★</div>
            <hr className="w-12 md:w-16 border-gray-500" />
          </div>
  
          {/* Description */}
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-xs md:text-base leading-relaxed px-2">
            Personality Advancement Circle of Engineers is a student organization started in 1994 by Damodar Gajeli in pursuit of augmenting and enhancing the personality of engineering students. Since then, the organization has toiled and given rise to many outstanding personalities holding important portfolios in the corporate sector today.
          </p>
  
          {/* Explore Events Button */}
          <button
            onClick={handleExploreClick}
            className="mt-8 px-5 py-2 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition text-xs md:text-base"
          >
            Explore Events
          </button>
        </div>
  
        {/* Scroll Down Animation */}
        <div className="absolute bottom-4 flex flex-col items-center space-y-2 animate-bounce">
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-yellow-400"></div>
          <p className="text-[10px] md:text-xs text-gray-400">Scroll Down</p>
        </div>
  
        {/* Blurry Decorative Circles */}
        <div className="absolute w-48 h-48 md:w-72 md:h-72 bg-yellow-500 opacity-20 rounded-full -top-10 -left-10 blur-3xl"></div>
        <div className="absolute w-48 h-48 md:w-72 md:h-72 bg-yellow-500 opacity-20 rounded-full bottom-0 right-0 blur-3xl"></div>
      </div>
  
      {/* Prudence Section */}
      <PrudenceSection prudenceRef={prudenceRef} />
  
      {/* Chief Board Section */}
      <BoardSection title="Chief Board 2025" members={boardMembersChief} />
    </div>
  );
  
}

export default Home;
