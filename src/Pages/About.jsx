import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  }),
};

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black text-white mt-10 py-16 px-6 md:px-16 lg:px-32">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* Section: Intro */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 font-cinzel-decorative text-center mb-6">
              About PACE
            </h1>

            <div className="flex justify-center mt-6 mb-10">
              <span className="block w-24 h-1 bg-yellow-400 rounded-full"></span>
            </div>

            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="text-gray-300 text-lg leading-relaxed text-justify"
            >
              Established in 1994, the{" "}
              <span className="text-yellow-400 font-semibold">
                Personality Advancement Circle of Engineers (PACE)
              </span>{" "}
              is a reputed, student-led, non-profit organization at Walchand
              College of Engineering (WCE), Sangli. PACE has consistently worked
              toward shaping well-rounded engineering professionals by nurturing
              essential life skills such as leadership, communication,
              confidence, and ethical responsibility.
            </motion.p>
          </motion.section>

          {/* Section: Objectives */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.1}
          >
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">Our Objectives</h2>
            <motion.ul
              variants={fadeUp}
              custom={0.2}
              className="list-disc list-inside text-gray-300 space-y-2"
            >
              <li>To nurture overall personality and co-curricular development.</li>
              <li>To cultivate self-discipline, teamwork, and personal growth.</li>
              <li>To enhance interpersonal and communication skills.</li>
              <li>To develop leadership qualities and professional attitude.</li>
            </motion.ul>
          </motion.section>

          {/* Section: Initiatives */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.2}
          >
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">PACE Initiatives</h2>

            <div className="space-y-10">
              {[
                {
                  title: "PACE TALKS",
                  text:
                    "PACE TALKS brings accomplished alumni from fields like entrepreneurship, civil services, higher education, and the corporate world to interact with students. These sessions are a source of real-world insights and long-lasting inspiration.",
                },
                {
                  title: "Campus Tour",
                  text:
                    "Organized during the induction phase, Campus Tour is a friendly initiative that helps first-year students become familiar with WCE’s academic and non-academic facilities, creating a sense of belonging.",
                },
                {
                  title: "PAS (PACE Aptitude Sessions)",
                  text:
                    "Weekly sessions designed to improve logical reasoning, quantitative aptitude, and data interpretation — fostering collaborative learning and preparing students for placements and competitive exams.",
                },
                {
                  title: "PAT (PACE Aptitude Test)",
                  text:
                    "Regular test series simulating real exam conditions, followed by discussions for conceptual clarity and time management. PAT helps track progress and boost confidence.",
                },
                {
                  title: "CSR (Corporate Social Responsibility)",
                  text:
                    "CSR initiatives involve visits to old age homes, orphanages, and service organizations. These acts of service instill empathy and social awareness among PACE members.",
                },
                {
                  title: "Club Meetups",
                  text:
                    "Regular group sessions encouraging discussion on current affairs, social issues, and personal development. These help members build critical thinking and communication skills.",
                },
              ].map((initiative, idx) => (
                <motion.div key={idx} variants={fadeUp} custom={0.1 * (idx + 1)}>
                  <h3 className="text-2xl font-semibold text-yellow-300 mb-2">{initiative.title}</h3>
                  <p className="text-gray-300">{initiative.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Section: Closing Statement */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.3}
          >
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">Our Legacy</h2>
            <motion.p
              variants={fadeUp}
              custom={0.4}
              className="text-gray-300 leading-relaxed"
            >
              For nearly three decades, PACE has been at the forefront of shaping dynamic, confident, and socially conscious engineers. The circle continues to thrive — fostering personal growth, teamwork, and leadership in every member.
            </motion.p>
          </motion.section>

          {/* Section: Staff Advisor */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.4}
          >
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">From Our Staff Advisor</h2>
            <motion.div
              variants={fadeUp}
              custom={0.5}
              className="flex flex-col md:flex-row items-center gap-6 border border-yellow-500 p-6 rounded-xl bg-gray-900"
            >
              <img
                src="/assets/Staff Advissor.jpg"
                alt="Staff Advisor"
                className="w-40 h-40 object-cover rounded-full border-4 border-yellow-400"
              />
              <div>
                <h3 className="text-2xl font-semibold text-yellow-300 mb-2">Shubham S Medhekar </h3>
                <p className="text-gray-300 mb-4 text-yellow-300">
                  - Assistant Professor Electrical department
                </p>
                <p className="text-gray-300 italic">
                  "PACE is more than a club; it's a transformative journey. I am proud to witness the growth and achievements of our students who push their boundaries through this vibrant platform."
                </p>
              </div>
            </motion.div>
          </motion.section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
