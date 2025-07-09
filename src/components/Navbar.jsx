import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path || (path === "/" && location.pathname === "");

  const linkClass = (path) =>
    `${isActive(path) ? "text-yellow-400" : "text-gray-200 hover:text-yellow-400"} transition-colors`;

  return (
    <nav className="bg-black shadow-lg sticky top-0 z-50 border-b border-yellow-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold text-yellow-400">
            <a href="/" aria-label="Go to homepage">PACE</a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 font-medium">
            <Link to="/" className={linkClass("/")}>Home</Link>
            <Link to="/about" className={linkClass("/about")}>About</Link>
            <Link to="/events" className={linkClass("/events")}>Events</Link>
            <a
              href="#contact"
              className={`${location.hash === "#contact" ? "text-yellow-400" : "text-gray-200 hover:text-yellow-400"} transition-colors`}
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-200 hover:text-yellow-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black px-4 pt-4 pb-4 space-y-2 font-medium border-b border-yellow-400/20 transition-all duration-300 ease-in-out">
          <Link
            to="/"
            className={`block py-2 ${linkClass("/")}`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`block py-2 ${linkClass("/about")}`}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/events"
            className={`block py-2 ${linkClass("/events")}`}
            onClick={() => setMenuOpen(false)}
          >
            Events
          </Link>
          <a
            href="#contact"
            className={`block py-2 ${location.hash === "#contact" ? "text-yellow-400" : "text-gray-200 hover:text-yellow-400"} transition-colors`}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
