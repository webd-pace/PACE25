
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

function NitygyaRegistration() {
  const FORM_ACTION_URL =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfBK5rGTX3aG5AIhA6mwSWz156SM3eRnU0s71PZMgZN6wbo7w/formResponse";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    year: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = document.createElement("form");
    form.method = "POST";
    form.action = FORM_ACTION_URL;
    form.target = "hidden_iframe";

    const mapping = {
      name: "4entry.150151383",
      email: "entry.410529509",
      phone: "entry.1400921432",
      college: "entry.716519714",
      year: "entry.731568522",
    };

    Object.keys(formData).forEach((field) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = mapping[field];
      input.value = formData[field];
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
    // Simulate short delay before showing success
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        college: "",
        year: "",
      });
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex items-center justify-center px-4 py-8">
      <motion.div
        className="max-w-3xl w-full bg-white shadow-2xl rounded-2xl p-6 sm:p-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Event Info */}
        <motion.div
          className="mb-8 border-b border-gray-200 pb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-indigo-600">
            Nitygya 2025
          </h1>
          <p className="mt-2 text-gray-700">
            Join us for Nitygya – the ultimate quiz competition at PACE Club.
          </p>
          <div className="mt-4 grid sm:grid-cols-3 gap-3 text-sm text-gray-600">
            <p>
              <span className="font-semibold">📅 Date:</span> 20th August 2025
            </p>
            <p>
              <span className="font-semibold">⏰ Time:</span> 10:00 AM – 1:00 PM
            </p>
            <p>
              <span className="font-semibold">📍 Venue:</span> WCE Auditorium
            </p>
          </div>
        </motion.div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-4 bg-green-100 text-green-800 rounded-lg text-center font-medium"
          >
            ✅ Registration Successful! See you at the event.
          </motion.div>
        ) : (
          <form className="space-y-5" onSubmit={handleSubmit}>
            <InputField
              label="Full Name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              delay={0.3}
            />
            <InputField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              delay={0.35}
            />
            <InputField
              label="Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              delay={0.4}
            />
            <InputField
              label="College / Branch"
              name="college"
              type="text"
              value={formData.college}
              onChange={handleChange}
              placeholder="Enter your college and branch"
              delay={0.45}
            />

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label className="block text-gray-700 font-medium mb-1">
                Year
              </label>
              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                required
              >
                <option value="">Select your year</option>
                <option>First Year Degree</option>
                <option>Second Year Degree</option>
                <option>Third Year Degree</option>
                <option>First Year Diploma</option>
                <option>Second Year Diploma</option>
                <option>Third Year Diploma</option>
              </select>
            </motion.div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full ${
                isSubmitting
                  ? "bg-gray-400"
                  : "bg-indigo-600 hover:bg-indigo-700"
              } text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105`}
              whileHover={!isSubmitting ? { scale: 1.05 } : {}}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              {isSubmitting ? "Submitting..." : "Register Now"}
            </motion.button>
          </form>
        )}
      </motion.div>

      {/* Hidden iframe */}
      <iframe
        name="hidden_iframe"
        style={{ display: "none" }}
        title="hidden"
      ></iframe>
    </div>
  );
}

function InputField({ label, name, type, value, onChange, placeholder, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
    >
      <label className="block text-gray-700 font-medium mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
        required
      />
    </motion.div>
  );
}

export default NitygyaRegistration;
