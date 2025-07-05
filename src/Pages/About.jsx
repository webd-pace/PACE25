import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black text-white py-16 px-6 md:px-16 lg:px-32">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* Section: Intro */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 font-cinzel-decorative text-center mb-6">
              About PACE
            </h1>
            <div className="flex justify-center mt-6 mb-10">
                <span className="block w-24 h-1 bg-yellow-400 rounded-full"></span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed text-justify">
              Established in 1994, the <span className="text-yellow-400 font-semibold">Personality Advancement Circle of Engineers (PACE)</span> is a reputed, student-led, non-profit organization at Walchand College of Engineering (WCE), Sangli. PACE has consistently worked toward shaping well-rounded engineering professionals by nurturing essential life skills such as leadership, communication, confidence, and ethical responsibility.
              <br /><br />
              Through workshops, events, and social initiatives, PACE empowers students to grow personally and professionally — encouraging them to step outside their comfort zones and make meaningful contributions to society.
            </p>
          </motion.section>

          {/* Section: Objectives */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">Our Objectives</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>To nurture overall personality and co-curricular development.</li>
              <li>To cultivate self-discipline, teamwork, and personal growth.</li>
              <li>To enhance interpersonal and communication skills.</li>
              <li>To develop leadership qualities and professional attitude.</li>
            </ul>
          </motion.section>

          {/* Section: Initiatives */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">PACE Initiatives</h2>

            <div className="space-y-10">
              {/* PACE TALKS */}
              <div>
                <h3 className="text-2xl font-semibold text-yellow-300 mb-2">PACE TALKS</h3>
                <p className="text-gray-300">
                  PACE TALKS brings accomplished alumni from fields like entrepreneurship, civil services, higher education, and the corporate world to interact with students. These sessions are a source of real-world insights and long-lasting inspiration.
                </p>
              </div>

              {/* Campus Tour */}
              <div>
                <h3 className="text-2xl font-semibold text-yellow-300 mb-2">Campus Tour</h3>
                <p className="text-gray-300">
                  Organized during the induction phase, Campus Tour is a friendly initiative that helps first-year students become familiar with WCE’s academic and non-academic facilities, creating a sense of belonging.
                </p>
              </div>

              {/* PAS */}
              <div>
                <h3 className="text-2xl font-semibold text-yellow-300 mb-2">PAS (PACE Aptitude Sessions)</h3>
                <p className="text-gray-300">
                  Weekly sessions designed to improve logical reasoning, quantitative aptitude, and data interpretation — fostering collaborative learning and preparing students for placements and competitive exams.
                </p>
              </div>

              {/* PAT */}
              <div>
                <h3 className="text-2xl font-semibold text-yellow-300 mb-2">PAT (PACE Aptitude Test)</h3>
                <p className="text-gray-300">
                  Regular test series simulating real exam conditions, followed by discussions for conceptual clarity and time management. PAT helps track progress and boost confidence.
                </p>
              </div>

              {/* CSR */}
              <div>
                <h3 className="text-2xl font-semibold text-yellow-300 mb-2">CSR (Corporate Social Responsibility)</h3>
                <p className="text-gray-300">
                  CSR initiatives involve visits to old age homes, orphanages, and service organizations. These acts of service instill empathy and social awareness among PACE members.
                </p>
              </div>

              {/* Club Service */}
              <div>
                <h3 className="text-2xl font-semibold text-yellow-300 mb-2">Club Service</h3>
                <p className="text-gray-300">
                  Regular group sessions encouraging discussion on current affairs, social issues, and personal development. These help members build critical thinking and communication skills.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section: Closing Statement */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">Our Legacy</h2>
            <p className="text-gray-300 leading-relaxed">
              For nearly three decades, PACE has been at the forefront of shaping dynamic, confident, and socially conscious engineers. The circle continues to thrive — fostering personal growth, teamwork, and leadership in every member.
            </p>
          </motion.section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;