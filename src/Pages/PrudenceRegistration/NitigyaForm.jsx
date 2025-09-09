import React, { useState } from "react";
import { motion } from "framer-motion";
import { prudenceDb, prudenceStorage } from "../../firebasePrudence";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { ArrowLeft } from "lucide-react";
import PrudenceNavbar from "./PrudenceNavbar";
import PrudenceFotter from "./PrudenceFotter";
import SponsorSectionW from "./SponsorSectionW";
import Loader from "../../components/Loader";

function NitigyaRegistration() {
  const navigate = useNavigate();

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
    referralCode: "",
    screenShot: null,
  });

  const [screenshotName, setScreenshotName] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    if (e.target.name === "screenShot") {
      setFormData({ ...formData, screenShot: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let downloadURL = "";

      // Upload screenshot if present
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

      // Save to Firestore
      await addDoc(collection(prudenceDb, "nitygya_registrations"), {
        ...formData,
        screenShot: downloadURL || null,
        createdAt: Timestamp.now(),
      });

      toast.success("✅ Registration submitted successfully!");

      // Reset form
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
        referralCode: "",
        screenShot: null,
      });
      setScreenshotName("");
      setUploadProgress(0);

      // Navigate to Thank You page
      navigate("/Thankyou");
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      toast.error("Submission failed: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {isSubmitting && <Loader />}
      <PrudenceNavbar />

      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex flex-col items-center justify-center px-4 py-8">


       {/* Back Button */}
      <div className="w-full max-w-3xl pt-10 mt-500 mb-4">
        <button
          onClick={() => navigate(-1)} // ✅ Go back to previous page
          className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium"
        >
          <ArrowLeft size={18} /> Back
        </button>
      </div>

      {/* Main Container Info */}
        <motion.div
          className="max-w-3xl w-full bg-white shadow-2xl rounded-2xl p-6 sm:p-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          {/* Event Info */}

<div className="mb-10 pb-6">
  <h1 className="text-3xl sm:text-4xl mt-10 text-center font-cinzel-decorative font-bold text-indigo-700">
    Nītigya 2025
  </h1>
  <motion.div
    initial={{ opacity: 0, scaleX: 0.3 }}
    animate={{ opacity: 1, scaleX: 1 }}
    transition={{ delay: 0.3, duration: 0.6 }}
    className="flex justify-center mt-3 mb-8 origin-center"
  >
    <span className="block w-[180px] h-1 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full"></span>
  </motion.div>

  {/* Tagline */}
  <p className="text-gray-600 text-center italic mb-2">
    <span className="font-semibold text-xl text-indigo-700">(नीतिज्ञ)</span> – "One who is knowledgeable in policy and conduct."
  </p>
  <p className="text-gray-700 text-center max-w-2xl mx-auto leading-relaxed">
    A high-stakes, intellectually stimulating event designed to challenge participants’ 
    understanding of <span className="font-semibold text-indigo-700">global politics, diplomacy, and policy-making</span>.
    Participants will craft, defend, and present legislative bills, as well as propose 
    innovative solutions to pressing global issues.
  </p>

  {/* Rounds Section */}
  <div className="mt-10 bg-white shadow-lg rounded-2xl p-6 border border-indigo-100">
    <h2 className="text-2xl font-bold text-indigo-700 text-center mb-6">Event Rounds</h2>
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-700 font-bold">1</div>
        <p className="text-gray-700">
          <span className="font-semibold text-indigo-800">Praśnamālikā (प्रश्नमालिका)</span> – 
          A quiz based on UPSC PYQs & current affairs.
        </p>
      </div>
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-700 font-bold">2</div>
        <p className="text-gray-700">
          <span className="font-semibold text-indigo-800">Prastuti (प्रस्तुति)</span> – 
          A group presentation to collaborate & discuss complex topics.
        </p>
      </div>
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-700 font-bold">3</div>
        <p className="text-gray-700">
          <span className="font-semibold text-indigo-800">Prajñā–Parīkṣā (प्रज्ञापरीक्षा)</span> – 
          A one-on-one interview with expert judges.
        </p>
      </div>
    </div>
  </div>

  {/* Event Details */}
  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl shadow-md p-6 mt-8 text-left border border-indigo-200">
    <h3 className="text-xl text- font-semibold text-indigo-700 mb-4">Event Details</h3>
    <p className="text-gray-700"><strong>Date:</strong> September 28, 2025</p>
    <p className="text-gray-700"><strong>Venue:</strong> Walchand College Of Engineering, Sangli</p>
    <p className="text-gray-700"><strong>Contact:</strong> Shardul – +91 8080884368</p>
  </div>
</div>


          {/* Registration Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <InputField label="Participant's Full Name" name="name" type="text" value={formData.name} onChange={handleChange} />
            <InputField label="Participant's Email" name="email" type="email" value={formData.email} onChange={handleChange} />
            <InputField label="Participant's Contact Number (Preferably WhatsApp)" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
            <InputField label="Participant's College Or Institute" name="college" type="text" value={formData.college} onChange={handleChange} />

            <SelectField label="Participant's Year Of Study" name="year" value={formData.year} onChange={handleChange} options={[
              "First Year Degree", "Second Year Degree", "Third Year Degree",
              "First Year Diploma", "Second Year Diploma", "Third Year Diploma",
            ]} />

            <SelectField label="Participant's Branch Or Trade" name="branch" value={formData.branch} onChange={handleChange} options={[
              "CSE", "IT", "AIML", "Robotics", "Civil", "Mechanical", "Electronics","Electrical",
            ]} />

            <SelectField label="Event Mode" name="eventmode" value={formData.eventmode} onChange={handleChange} options={["Offline Mode (in WCE)", "Online Mode (At your preferable location)"]} />

            <SelectField label="Payment Mode" name="paymentMode" value={formData.paymentMode} onChange={handleChange} options={["Online", "Offline"]} />

            {/* QR Section */}
            {formData.eventmode && (
              <div className="text-center my-6 p-6 bg-gray-50 rounded-xl shadow-md">
                <p className="mb-4 text-sm text-indigo-800 bg-indigo-100 border border-indigo-300 rounded-md p-3">
                  💡 If the amount is Paid in Offline method, upload the image of the Receipt You were given.
                </p>
                <h4 className="mb-4 font-semibold text-lg text-gray-800">Scan to Pay</h4>
                <div className="mx-auto flex items-center justify-center bg-white rounded-lg border border-gray-200 shadow-sm p-2 w-full max-w-[250px]">
                  <img
                    src={
                      formData.eventmode === "Offline Mode (in WCE)"
                        ? "/assets/QRs/Prasad_99.jpg"
                        : "/assets/QRs/Prasad_79.jpg"
                    }
                    alt="Payment QR"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <p className="mt-3 text-sm text-gray-600">
                  UPI ID: <span className="font-medium">prasadbedage2030@oksbi</span>
                </p>
              </div>
            )}

            {/* Transaction ID */}
            <div>
              <p className="mb-3 text-sm text-yellow-800 bg-yellow-100 border border-yellow-300 rounded-md p-2">
                For offline entries, please enter the ID given on your Receipt.
              </p>
              <label className="block text-gray-700 font-medium mb-1">Transaction ID</label>
              <input
                type="text"
                name="transactionID"
                value={formData.transactionID}
                onChange={handleChange}
                placeholder="e.g., AXIS12345ABC"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            {/* Screenshot Upload */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Payment Screenshot</label>
              <div className="relative flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-400 transition">
                <p className="mb-4 text-sm text-indigo-800 bg-indigo-100 border border-indigo-300 rounded-md p-3">
                  💡 If the amount is Paid in Offline method, upload the image
                  of the Receipt you were given.
                </p>
                <input
                  type="file"
                  name="screenShot"
                  accept="image/*"
                  onChange={(e) => {
                    handleChange(e);
                    if (e.target.files.length > 0) {
                      setScreenshotName(e.target.files[0].name);
                    }
                  }}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                {screenshotName ? (
                  <span className="text-green-600 font-medium text-center px-2">{screenshotName}</span>
                ) : (
                  <span className="text-gray-500 text-sm text-center">Click or drag & drop to upload</span>
                )}
              </div>
              {uploadProgress > 0 && (
                <p className="text-sm text-gray-600 mt-2">Uploading: {Math.round(uploadProgress)}%</p>
              )}
            </div>

              {/* Referral Code */}
            <InputField label="Referral Code" name="referralCode" type="text" value={formData.referralCode} onChange={handleChange} />

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full ${isSubmitting ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"} text-white font-semibold py-2 px-6 rounded-lg`}
              whileTap={{ scale: 0.97 }}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </motion.button>
          </form>
        </motion.div>
      </div>

      <SponsorSectionW />
      <PrudenceFotter />
    </>
  );
}

// Reusable input
function InputField({ label, name, type, value, onChange }) {
  return (
    <div>
      <label className="block text-gray-700 font-medium mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
        required
      />
    </div>
  );
}

// Reusable select
function SelectField({ label, name, value, onChange, options }) {
  return (
    <div>
      <label className="block text-gray-700 font-medium mb-1">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
        required
      >
        <option value="">Select</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

export default NitigyaRegistration;
