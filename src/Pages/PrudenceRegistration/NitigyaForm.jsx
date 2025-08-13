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
    eventmode: "",
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
        eventmode: "",
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
              label="Event Mode"
              name="eventmode"
              value={formData.eventmode}
              onChange={handleChange}
              options={[
                "Offline Mode",
                "Online Mode",
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
            {formData.eventmode && (
              <div className="text-center my-6 p-6 bg-gray-50 rounded-xl shadow-md">
                  <p className="mb-4 text-sm text-indigo-800 bg-ingigo-100 border border-indigo-300 rounded-md p-3">
                      💡 If the amount is Paid in Offline method, upload the image of the Receipt You were given.
                  </p>
                <h4 className="mb-4 font-semibold text-lg text-gray-800">
                  Scan to Pay
                </h4>

                <div className="mx-auto flex items-center justify-center bg-white rounded-lg border border-gray-200 shadow-sm p-2 w-full max-w-[250px]">
                  <img
                    src={
                      formData.eventmode === "Offline Mode"
                        ? "/assets/QRs/GooglePay_QR_129Rs.png" /* Offline Mode */
                        : "/assets/QRs/GooglePay_QR_99Rs.png" /* Online Mode */
                    }
                    alt="Payment QR Code"
                    className="w-full h-auto object-contain"
                  />
                </div>

                <p className="mt-3 text-sm text-gray-600 break-words">
                  UPI ID:{"piyushdawkhare0000@okaxis"}
                  <span className="font-medium">
                    {formData.eventmode === "Offline Mode"
                      ? "piyushdawkhare0000@okaxis" /* Offline Mode */
                      : "piyushdawkhare0000@okaxis" /* Online Mode */}
                  </span>
                </p>
              </div>
            )}

            {/* Transaction ID Section */}
            <div>
                <p className="mb-3 text-sm text-yellow-800 bg-yellow-100 border border-yellow-300 rounded-md p-2">
                      For the offline entries, please enter the id given on your Receipt. 
                </p>

              <label className="block text-gray-700 font-medium mb-1">
                Transaction ID
              </label>
              <input
                type="text"
                name="transactionID"
                value={formData.transactionID}
                onChange={handleChange}
                placeholder="e.g., AXIS12345ABC"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            {/* Screenshot Section */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Payment Screenshot
              </label>

              <div className="relative flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-400 transition">
                <input
                  type="file"
                  name="screenShot"
                  accept="image/*"
                  onChange={handleChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <span className="text-gray-500 text-sm text-center">
                  Click or drag & drop to upload
                </span>
              </div>

              {uploadProgress > 0 && (
                <p className="text-sm text-gray-600 mt-2">
                  Uploading: {Math.round(uploadProgress)}%
                </p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full ${isSubmitting ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"} text-white font-semibold py-2 px-6 rounded-lg`}
              whileTap={{ scale: 0.97 }}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
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
