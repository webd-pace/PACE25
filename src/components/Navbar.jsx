import { useState } from "react";
// import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black shadow-lg sticky top-0 z-50 border-b border-yellow-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold text-yellow-400">
            <a href="/"> PACE</a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 text-gray-200 font-medium">
            <a href="/" className="hover:text-yellow-400 transition-colors">Home</a>
            <a href="/" className="hover:text-yellow-400 transition-colors">About</a>
            <a href="/" className="hover:text-yellow-400 transition-colors">Events</a>
            <a href="/" className="hover:text-yellow-400 transition-colors">Contact</a>
          </div>

          {/* CTA */}
          {/* <div className="hidden md:flex">
            <a 
              href="#" 
              className="bg-yellow-400 text-black px-6 py-2 rounded-full 
                         text-sm font-bold hover:bg-yellow-300 transition-all
                         shadow-md shadow-yellow-400/20"
            >
              Join Now
            </a>
          </div> */}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-200 hover:text-yellow-400 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black px-4 pt-2 pb-4 space-y-2 text-gray-200 font-medium border-b border-yellow-400/20">
          <a href="/" className="block hover:text-yellow-400 py-2">Home</a>
          <a href="/" className="block hover:text-yellow-400 py-2">About</a>
          <a href="/" className="block hover:text-yellow-400 py-2">Events</a>
          <a href="/" className="block hover:text-yellow-400 py-2">Contact</a>
          {/* <a href="/" className="block bg-yellow-400 text-black text-center px-4 py-2 rounded-full mt-2 font-bold hover:bg-yellow-300 transition"> Join Now </a> */}
        </div>
      )}
    </nav>
  );
}