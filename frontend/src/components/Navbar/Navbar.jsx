import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
   {/* Logo */}
<div className="text-2xl font-bold tracking-widest">
  <img
    src="/PACE.png"
    alt="PACE Logo"
    className="ml-5 h-10 w-15" // Adjust height as you need
  />
  <div className="text-xs font-normal tracking-normal">
    {/* If you need a slogan or tagline under the logo, you can add it here */}
  </div>
</div>


        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm uppercase tracking-wide">
          <li className="hover:text-yellow-400 cursor-pointer">Home</li>
          <li className="hover:text-yellow-400 cursor-pointer">About</li>
          <li className="hover:text-yellow-400 cursor-pointer">Events</li>
          <li className="hover:text-yellow-400 cursor-pointer">Gallery</li>
          <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <X size={28} onClick={() => setIsOpen(false)} className="cursor-pointer" />
          ) : (
            <Menu size={28} onClick={() => setIsOpen(true)} className="cursor-pointer" />
          )}
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 bg-black p-4 text-center text-sm uppercase tracking-wide">
          <li className="hover:text-yellow-400 cursor-pointer">Home</li>
          <li className="hover:text-yellow-400 cursor-pointer">About</li>
          <li className="hover:text-yellow-400 cursor-pointer">Events</li>
          <li className="hover:text-yellow-400 cursor-pointer">Gallery</li>
          <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
        </ul>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white mt-20 pt-8 pb-4 text-center">
      <div className="text-sm">
        © {new Date().getFullYear()} PACE - Personality Advancement Circle Of Engineers
      </div>
      <div className="mt-2 text-xs text-gray-400">
        Contact us:{" "}
        <a href="mailto:presidentofpace@gmail.com" className="underline hover:text-yellow-400">
          presidentofpace@gmail.com
        </a>
      </div>
    </footer>
  );
}

// Export both together
export { Navbar, Footer };
