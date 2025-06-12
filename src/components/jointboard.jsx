import { useEffect, useRef } from "react";

export const jointboard = ({ title, members }) => {
  const containerRef = useRef(null);

  // Auto-scroll every 1.5 seconds
  useEffect(() => {
    const el = containerRef.current;
    const scrollAmount = 250;
    const scrollDelay = 1000;

    const intervalId = setInterval(() => {
      if (!el) return;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth) {
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
        <h2 className="text-5xl md:text-5xl scale-90 font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500 uppercase tracking-widest font-cinzel-decorative">
        {title}
        </h2>

        {/* Scroll container with hidden scrollbar */}
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
        >
          {members.map((m, i) => (
            <div
              key={i}
              className="snap-center flex-shrink-0 w-64 bg-transparent rounded-3xl p-6 flex flex-col items-center text-center transition-all duration-250 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20"
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

        <div className="flex justify-center mt-8">
          <button className="px-6 py-2 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition">
            View Full Board
          </button>
        </div>
      </div>
    </section>
  );
};