import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300  border-t border-yellow-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Top Grid Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Logo & Description */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-yellow-400">PACE</h2>
            <p className="text-sm mt-2 max-w-xs opacity-75">
              Empowering learners with knowledge and tools for a better tomorrow.
            </p>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-1 text-sm">
            <div>
              <h2 className="text-yellow-400 font-semibold mb-2">Contact</h2>
              <ul className="space-y-1">
                <li><a className="hover:text-yellow-400 transition-colors">President: Vishvajeet Pawar  +91 7887739590</a></li>
                <li><a className="hover:text-yellow-400 transition-colors">Vice-President: Prasad Bedge +91 9307286697</a></li>
                <li><a className="hover:text-yellow-400 transition-colors">Secretary: Pranav Patil      +91 8767939192</a></li>
                <li><a className="hover:text-yellow-400 transition-colors">Mail: wcepace@walchandsangli.ac.in</a></li>
              </ul>
            </div>
            {/* <div>
              <h3 className="text-yellow-400 font-semibold mb-2">Resources</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Events</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-yellow-400 font-semibold mb-2">Legal</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div> */}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-yellow-400/20 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} PACE. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;