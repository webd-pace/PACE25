import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

export const BoardSection = ({ title, members }) => {
  const containerRef = useRef(null);
  const scrollInterval = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const scrollAmount = 250;
  const scrollDelay = 1500;

  const startAutoScroll = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;

    scrollInterval.current = setInterval(() => {
      if (isHovered) return;
      el.scrollBy({ left: scrollAmount, behavior: "smooth" });
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollTo({ left: 0, behavior: "auto" });
      }
    }, scrollDelay);
  }, [isHovered]);

  const stopAutoScroll = useCallback(() => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
    }
  }, []);

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [startAutoScroll, stopAutoScroll]);

  useEffect(() => {
    stopAutoScroll();
    if (!isHovered) startAutoScroll();
  }, [isHovered, startAutoScroll, stopAutoScroll]);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="relative py-16 bg-black text-white overflow-hidden">
      {/* 🔁 Swapped Glow Corners */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-yellow-500 opacity-20 rounded-full filter blur-3xl z-0"></div>
      <div className="absolute -bottom-24 -left-20 w-96 h-96 bg-yellow-500 opacity-20 rounded-full filter blur-3xl z-0"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500 uppercase tracking-widest font-cinzel-decorative"
        >
          {title}
        </motion.h2>

        {/* Underline */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.3 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center mt-6 mb-10 origin-center"
        >
          <span className="block w-[200px] h-1 bg-yellow-400 rounded-full"></span>
        </motion.div>

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
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
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
                <h4 className="text-xs uppercase text-white opacity-70">
                  {m.post}
                </h4>
                <h3 className="mt-1 text-lg font-bold text-white">
                  {m.fullName}
                </h3>
              </motion.div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 z-10 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-all"
          >
            ▶
          </button>
        </div>

        {/* View Full Board Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="flex justify-center mt-8"
        >
          <button className="px-6 py-2 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition">
            <a href="/FullBoard">View Full Board</a>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BoardSection;
