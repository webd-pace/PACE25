import { useEffect, useRef } from "react";

// Fill in actual member names in `fullName` as you get them

const boardMembersChief = [
  { post: "President",             fullName: "Vishwajeet Pawar",    imgUrl: "../../public/assets/president.png" },
  { post: "Vice President",        fullName: "Prasad Bedage",      imgUrl: "../../public/assets/vp.png"        },
  { post: "Secretary",             fullName: "Pranav Patil",       imgUrl: "../../public/assets/sec.png"       },
  { post: "Chief PDE",             fullName: "Haripriya Yele",     imgUrl: "../../public/assets/pde3.png"       },
  { post: "Chief PDE",             fullName: "Samruddhi Shinde",   imgUrl: "../../public/assets/pde2.png"      },
  { post: "Chief PDE",             fullName: "Gayatri Patil",      imgUrl: "../../public/assets/pde4.png"      },
  { post: "Chief PDE",             fullName: "Samarth Gaikwad",    imgUrl: "../../public/assets/pde.png"      },
  { post: "Chief PDF",             fullName: "Chinmayi Bargale",   imgUrl: "../../public/assets/pdf.png"       },
  // { post: "Chief PDF",             fullName: "Prasad Bedage",      imgUrl: "../../public/assets/vp.png"       },
  { post: "Chief PDP",             fullName: "Juhi Zinage",        imgUrl: "../../public/assets/pdp.png"       },
  { post: "Chief PDP",             fullName: "Sahil Badera",       imgUrl: "../../public/assets/pdp2.png"      },
  { post: "Chief PDP",             fullName: "Sakshi Mehtre",      imgUrl: "../../public/assets/pdp4.png"      },
  { post: "Chief PDP",             fullName: "Anchit Bagde",       imgUrl: "../../public/assets/pdp3.png"      },
  { post: "Chief Skid-P",          fullName: "Piyush Dawkhare",    imgUrl: "../../public/assets/skidp.png"     },
  { post: "Chief Skid-P",          fullName: "Manisha Shinde",     imgUrl: "../../public/assets/skid6p2.png"    },
  { post: "Chief Skid-P",          fullName: "Dhanshri Mali",      imgUrl: "../../public/assets/skidp.png"     },
  { post: "Chief Skid-P",          fullName: "Pratik Kapre",       imgUrl: "../../public/assets/skidp2.png"    },
  // { post: "Chief Skid-W",          fullName: "Samruddhi Shinde",   imgUrl: "../../public/assets/pdf.png"       },
  { post: "Creative Team Head",    fullName: "Rajvardhan Kadam",   imgUrl: "../../public/assets/CTH.png"       },
  { post: "Creative Team Head",    fullName: "Chaitrali Jadhav",   imgUrl: "../../public/assets/CTH2.png"      },
  { post: "Creative Team Head",    fullName: "Tanuja Beskar",      imgUrl: "../../public/assets/CTH3.png"      },
  { post: "Chief Aptitude Developer", fullName: "Darshan Nandurge", imgUrl: "../../public/assets/aptidev.png"   },
  // { post: "Chief Web Developer",   fullName: "Haripriya Yele",     imgUrl: "../../public/assets/pdf.png"       },
  // { post: "Chief Web Developer",   fullName: "Piyush Dawkhare",    imgUrl: "../../public/assets/pdf.png"       },
  { post: "Chief PACEr",           fullName: "Kalpesh Kamble",     imgUrl: "../../public/assets/5pdf.png"       },
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
      img: "../../public/assets/aspire.png",
      desc:
        "A mock placement drive simulating real campus interviews, with Expert & Novice tracks bridging academics and industry.",
    },
    {
      title: "Nitigya",
      img: "../../public/assets/nitigya.png",
      desc:
        "High-stakes geopolitical challenge with three intense rounds on global politics, diplomacy, and policy-making.",
    },
    {
      title: "Standout",
      img: "../../public/assets/standout.png",
      desc:
        "Creative themes and unexpected adaptability tests that leave a lasting impression through immersive experiences.",
    },
    {
      title: "Ideathon",
      img: "../../public/assets/ideathon.png",
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
        <h2 className="text-5xl md:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500 uppercase tracking-widest">
          Prudence 2K24
        </h2>
        {/* Underline Accent */}
        <div className="flex justify-center mt-4">
          <span className="block w-24 h-1 bg-yellow-400 rounded-full"></span>
        </div>

        {/* Intro Text */}
        <p className="mt-8 text-gray-300 text-center max-w-3xl mx-auto text-lg leading-relaxed">
          PRUDENCE is the National Level Management Fest organised by PACE since 2001,
          fostering managerial skills of youth in its Carnival of intellectuals. This year, it
          reached the <span className="font-semibold text-yellow-400">INTERNATIONAL LEVEL</span>,
          featuring tracks across economics, entrepreneurship, marketing, debate, politics,
          social responsibility, journalism, and more.
        </p>
        {/* Sub-Events Grid */}
        <div className="mt-15 grid grid-cols-1 sm:grid-cols-2 scale-80 lg:grid-cols-4 gap-10">
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
              <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Content */}
              <div className="relative p-6">
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-yellow-400 transition-colors">
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
        <div className="absolute top-5 left-5 text-sm font-light tracking-widest">
          WCE Sangli
        </div>
        <div className="absolute top-5 right-5 text-sm font-bold uppercase cursor-pointer hover:text-yellow-400 transition">
          Join Now
        </div>

        <div className="text-center px-4">
          <p className="text-gray-400 tracking-widest uppercase text-sm mb-2">
            Personality Advancement Circle Of Engineers
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide mb-4">
            PACE
          </h1>

          <div className="flex items-center justify-center space-x-4 my-6">
            <hr className="w-16 border-gray-500" />
            <div className="text-2xl text-yellow-400 animate-pulse">★</div>
            <hr className="w-16 border-gray-500" />
          </div>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Personality Advancement Circle of Engineers is a student organization started in 1994 by Damodar Gajeli in pursuit of augmenting and enhancing the personality of engineering students. Since then, the organization has toiled and given rise to many outstanding personalities holding important portfolios in the corporate sector today.
          </p>

          <button
            onClick={handleExploreClick}
            className="mt-8 px-6 py-2 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition"
          >
            Explore Events
          </button>
        </div>

        <div className=" absolute bottom-1 flex flex-col items-center space-y-2 animate-bounce">
          <div className="mt-15 w-8 h-8 rounded-full border-2 border-yellow-400"></div>
          <p className="text-xs text-gray-400">Scroll Down</p>
        </div>

        <div className="absolute w-72 h-72 bg-yellow-500 opacity-20 rounded-full -top-10 -left-10 blur-3xl"></div>
        <div className="absolute w-72 h-72 bg-yellow-500 opacity-20 rounded-full bottom-0 right-0 blur-3xl"></div>
      </div>

      {/* Prudence Section */}
      <PrudenceSection prudenceRef={prudenceRef} />

      {/* Chief Board Section */}
      <BoardSection title="Chief Board 2025" members={boardMembersChief} />
    </div>
  );
}

export default Home;
