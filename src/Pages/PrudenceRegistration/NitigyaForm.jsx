import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

export default function NitygyaRegistration() {
  const FORM_ACTION_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse"; 
  // Replace YOUR_FORM_ID with your new form's ID

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    year: "",
    // message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.createElement("form");
    form.method = "POST";
    form.action = FORM_ACTION_URL;
    form.target = "hidden_iframe";

    const mapping = {
      name: "entry.YOUR_ID_1",    // Full Name field ID
      email: "entry.YOUR_ID_2",   // Email field ID
      phone: "entry.YOUR_ID_3",   // Phone Number field ID
      college: "entry.YOUR_ID_4", // College/Branch field ID
      year: "entry.YOUR_ID_5",    // Year field ID
    //   message: "entry.YOUR_ID_6"  // Message field ID
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

    alert("✅ Registration Successful!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      college: "",
      year: "",
    //   message: ""
    });
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
            <p><span className="font-semibold">📅 Date:</span> 20th August 2025</p>
            <p><span className="font-semibold">⏰ Time:</span> 10:00 AM – 1:00 PM</p>
            <p><span className="font-semibold">📍 Venue:</span> WCE Auditorium</p>
          </div>
        </motion.div>

        {/* Registration Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name */}
          <InputField label="Full Name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Enter your full name" delay={0.3} />
          {/* Email */}
          <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" delay={0.35} />
          {/* Phone */}
          <InputField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" delay={0.4} />
          {/* College */}
          <InputField label="College / Branch" name="college" type="text" value={formData.college} onChange={handleChange} placeholder="Enter your college and branch" delay={0.45} />

          {/* Year */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            <label className="block text-gray-700 font-medium mb-1">Year</label>
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            >
              <option value="">Select your year</option>
              <option>First Year</option>
              <option>Second Year</option>
              <option>Third Year</option>
              <option>Fourth Year</option>
            </select>
          </motion.div>

          {/* Message
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.55 }}>
            <label className="block text-gray-700 font-medium mb-1">Message (Optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Any special requests or notes..."
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              rows="3"
            ></textarea>
          </motion.div> */}

          <motion.button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            Register Now
          </motion.button>
        </form>
      </motion.div>

      {/* Hidden iframe */}
      <iframe name="hidden_iframe" style={{ display: "none" }} title="hidden"></iframe>
    </div>
  );
}

function InputField({ label, name, type, value, onChange, placeholder, delay }) {
  return (
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay }}>
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
