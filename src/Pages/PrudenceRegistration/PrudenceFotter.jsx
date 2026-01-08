import React from "react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-white text-gray-700 border-t border-gray-500/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top Grid Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          {/* Logo & Description */}
          <div>
            <h2 className="text-3xl font-bold text-blue-600">PACE</h2>
            <p className="text-sm mt-2 max-w-sm opacity-75">
              Empowering learners with knowledge and tools for a better tomorrow.
            </p>
          </div>

          {/* Contact Information */}
          <div className="text-sm">
            <h2 className="text-blue-600 font-semibold mb-3">Contact</h2>
            <ul className="space-y-1">
              <li>
                <span className="font-medium">President:</span> Vishvajeet Pawar – +91 7887739590
              </li>
              <li>
                <span className="font-medium">Vice-President:</span> Prasad Bedge – +91 9307286697
              </li>
              <li>
                <span className="font-medium">Secretary:</span> Pranav Patil – +91 8767939192
              </li>
              <li>
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:pace@walchandsangli.ac.in"
                  className="text-blue-600 hover:underline"
                >
                  pace@walchandsangli.ac.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-500/20 mt-10 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} PACE. All rights reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center mt-4 gap-6">
            <a
              href="https://www.youtube.com/@wcepace1758"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-red-500 transition-colors text-2xl"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/personality-advancement-circle-of-engineers/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-500 transition-colors text-2xl"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/wcepace/?igsh=MWZmdThjbXk5Zmp0dQ%3D%3D#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-pink-500 transition-colors text-2xl"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
