import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function PrudenceNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path || (path === "/" && location.pathname === "");

  const linkClass = (path) =>
    `${isActive(path) ? "text-blue-600" : "text-gray-800 hover:text-blue-600"} transition-colors`;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 60, damping: 12 }}
      className={`fixed top-0 w-full z-50 bg-white text-black border-b border-gray-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold text-blue-600">
            <a href="/" aria-label="Go to homepage">PACE</a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 font-medium">
            <Link to="/" className={linkClass("/")}>Home</Link>
            <Link to="/events" className={linkClass("/events")}>Events</Link>
            <Link to="/about" className={linkClass("/about")}>About</Link>
            <a
              href="#contact"
              className={`${
                location.hash === "#contact"
                  ? "text-blue-600"
                  : "text-gray-800 hover:text-blue-600"
              } transition-colors`}
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Animated */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden bg-white px-4 pt-4 pb-4 space-y-2 font-medium border-b border-gray-300"
          >
            <Link to="/" className={`block py-2 ${linkClass("/")}`} onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to="/events" className={`block py-2 ${linkClass("/events")}`} onClick={() => setMenuOpen(false)}>
              Events
            </Link>
            <Link to="/about" className={`block py-2 ${linkClass("/about")}`} onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <a
              href="#contact"
              className={`block py-2 ${
                location.hash === "#contact" ? "text-blue-600" : "text-gray-800 hover:text-blue-600"
              } transition-colors`}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
