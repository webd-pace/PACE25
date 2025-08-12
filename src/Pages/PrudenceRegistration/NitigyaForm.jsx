import React, { useState } from "react";
import { motion } from "framer-motion";
import { prudenceDb, prudenceStorage } from "../../firebasePrudence";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function NitygyaRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    year: "",
    branch: "",
    transactionID: "",
    track: "",
    paymentMode: "",
    entry: "",
    screenShot: null,
  });

  const [uploadProgress, setUploadProgress] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "screenShot") {
      setFormData({ ...formData, screenShot: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let downloadURL = "";

      // Upload screenshot to Firebase Storage if it exists
      if (formData.screenShot) {
        const storageRef = ref(
          prudenceStorage,
          `nitygya_screenshots/${Date.now()}_${formData.screenShot.name}`
        );
        const uploadTask = uploadBytesResumable(storageRef, formData.screenShot);

        await new Promise((resolve, reject) => {
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              setUploadProgress(progress);
            },
            (error) => reject(error),
            async () => {
              downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
              resolve();
            }
          );
        });
      }

      // Save form data to Firestore
      await addDoc(collection(prudenceDb, "nitygya_registrations"), {
        ...formData,
        screenShot: downloadURL || null,
        createdAt: Timestamp.now(),
      });

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        college: "",
        year: "",
        branch: "",
        transactionID: "",
        track: "",
        paymentMode: "",
        entry: "",
        screenShot: null,
      });
      setUploadProgress(0);
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
    }
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
        <div className="mb-8 border-b border-gray-200 pb-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-indigo-600">
            Nitygya 2025
          </h1>
          <p className="mt-2 text-gray-700">
            Join us for Nitygya – the ultimate quiz competition at PACE Club.
          </p>
        </div>

        {isSubmitted ? (
          <div className="p-4 bg-green-100 text-green-800 rounded-lg text-center font-medium">
            ✅ Registration Successful! See you at the event.
          </div>
        ) : (
          <form className="space-y-5" onSubmit={handleSubmit}>
            <InputField label="Full Name" name="name" type="text" value={formData.name} onChange={handleChange} />

            <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />

            <InputField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} />

            <InputField label="College / Branch" name="college" type="text" value={formData.college} onChange={handleChange} />
            
            <SelectField
              label="Year"
              name="year"
              value={formData.year}
              onChange={handleChange}
              options={[
                "First Year Degree",
                "Second Year Degree",
                "Third Year Degree",
                "First Year Diploma",
                "Second Year Diploma",
                "Third Year Diploma",
              ]}
            />
            <SelectField
              label="Branch/Trade"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              options={[
                "CSE",
                "IT",
                "AIML",
                "Robotics",
                "Civil",
                "Mechanical",
                "Electronics",
              ]}
            />

            <SelectField
              label="Track" 
              name="track" 
              value={formData.track}
              onChange={handleChange}
              options={[
                "Novice Track",
                "Expert Track",
              ]}
            />

             <SelectField
              label="Payment Mode" 
              name="paymentMode"
              value={formData.paymentMode}
              onChange={handleChange}
              options={[
                "Online",
                "Offline",
              ]}
            /> 

          {/* QR Code Payment Section */}
<div className="text-center my-6 p-4 bg-gray-50 rounded-xl shadow-sm">
  <h4 className="mb-4 font-semibold text-lg text-gray-800">
    Scan to Pay
  </h4>

  <div className="w-96 h-96 mx-auto flex items-center justify-center bg-white rounded-lg border border-gray-200 p-1">
    <img
      src="/assets/QRs/GooglePay_QR.png" // Place in /public folder
      alt="Payment QR Code"
      className="max-w-full max-h-full object-contain"
    />
  </div>

  <p className="mt-2 text-sm text-gray-600">
    UPI ID: <span className="font-medium">piyushdawkhare000@okaxis</span>
  </p>
</div>


            
            <InputField label="Transaction ID" name="transactionID" type="text" value={formData.transactionID} onChange={handleChange} />
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Payment Screenshot
              </label>
              <input
                type="file"
                name="screenShot"
                accept="image/*"
                onChange={handleChange}
                className="w-full"
              />
              {uploadProgress > 0 && (
                <p className="text-sm text-gray-600 mt-1">
                  Uploading: {Math.round(uploadProgress)}%
                </p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full ${isSubmitting ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"} text-white font-semibold py-2 px-6 rounded-lg`}
              whileTap={{ scale: 0.97 }}
            >
              {isSubmitting ? "Submitting..." : "Register Now"}
            </motion.button>
          </form>
        )}
      </motion.div>
    </div>
  );
}

function InputField({ label, name, type, value, onChange }) {
  return (
    <div>
      <label className="block text-gray-700 font-medium mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border rounded-lg"
        required
      />
    </div>
  );
}

function SelectField({ label, name, value, onChange, options }) {
  return (
    <div>
      <label className="block text-gray-700 font-medium mb-1">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border rounded-lg"
        required
      >
        <option value="">Select</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export default NitygyaRegistration;
