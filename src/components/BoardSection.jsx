import { useEffect, useRef, useState } from "react";

export const BoardSection = ({ title, members }) => {
  const containerRef = useRef(null);
  const scrollInterval = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const scrollAmount = 250;
  const scrollDelay = 1500;

  const startAutoScroll = () => {
    const el = containerRef.current;
    if (!el) return;

    scrollInterval.current = setInterval(() => {
      if (isHovered) return;

      el.scrollBy({ left: scrollAmount, behavior: "smooth" });

      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollTo({ left: 0, behavior: "auto" });
      }
    }, scrollDelay);
  };

  const stopAutoScroll = () => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
    }
  };

  useEffect(() => {
    startAutoScroll();

    return () => stopAutoScroll(); // Cleanup on unmount
  }, []);

  useEffect(() => {
    stopAutoScroll(); // Clear previous
    if (!isHovered) startAutoScroll(); // Restart if not hovering
  }, [isHovered]);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500 uppercase tracking-widest font-cinzel-decorative">
          {title}
        </h2>

        <div className="flex justify-center mt-6 mb-10">
          <span className="block w-[200px] h-1 bg-yellow-400 rounded-full"></span>
        </div>

        {/* Scroll container + arrows */}
        <div className="flex justify-center items-center relative group">
          <button
            onClick={scrollLeft}
            className="absolute left-0 z-10 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-all"
          >
            ◀
          </button>

          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {[...members, ...members].map((m, i) => (
              <div
                key={i}
                className="snap-center flex-shrink-0 w-64 bg-transparent rounded-3xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20"
              >
                <div className="relative mb-4">
                  <img
                    src={m.imgUrl}
                    alt={m.post}
                    className="w-28 h-28 rounded-full object-cover ring-2 ring-yellow-400"
                  />
                </div>
                <hr className="w-12 border-yellow-400 mb-3" />
                <h4 className="text-xs uppercase text-white opacity-70">{m.post}</h4>
                <h3 className="mt-1 text-lg font-bold text-white">{m.fullName}</h3>
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 z-10 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-all"
          >
            ▶
          </button>
        </div>

        <div className="flex justify-center mt-8">
          <button className="px-6 py-2 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition">
            <a href="/FullBoard">View Full Board</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BoardSection;