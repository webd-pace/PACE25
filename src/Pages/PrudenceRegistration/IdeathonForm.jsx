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
// import SponsorSectionW from "./SponsorSectionW";
import Loader from "../../components/Loader";

function IdeathonRegistration() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    team_member_name1: "",
    team_member_name2: "",
    team_member_name3: "",
    email: "",
    phone: "",
    college: "",
    year: "",
    branch: "",
    transactionID: "",
    teamMembers: "",
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
          `Ideathon_screenshots/${Date.now()}_${formData.screenShot.name}`
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
      await addDoc(collection(prudenceDb, "Ideathon_registrations"), {
        ...formData,
        screenShot: downloadURL || null,
        createdAt: Timestamp.now(),
      });

      toast.success("✅ Ideathon registration submitted successfully!");

      // Reset form
      setFormData({
        name: "",
        team_member_name1: "",
        team_member_name2: "",
        team_member_name3: "",
        email: "",
        phone: "",
        college: "",
        year: "",
        branch: "",
        transactionID: "",
        teamMembers: "",
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
        <div className="w-full max-w-3xl pt-10 mb-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium"
          >
            <ArrowLeft size={18} /> Back
          </button>
        </div>

        <motion.div
          className="max-w-3xl w-full bg-white shadow-2xl rounded-2xl p-6 sm:p-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Event Info */}
          <div className="mb-8 border-b border-gray-200 pb-4">
            <h1 className="text-3xl sm:text-4xl mt-10 text-center font-cinzel-decorative font-bold text-indigo-600">
              Ideaignite 2k25
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
             <span className="font-semibold text-xl text-indigo-700">Ideaignite</span> – "Entrepreneurs: Where Ideas come into Reality !"
           </p>

            <p className="text-gray-700 text-center max-w-2xl mx-auto leading-relaxed">
              Pitch, collaborate, and innovate with the best!
              Turn your vision into a viable venture!
              Join the ultimate startup showdown!
              Learn, grow, and take your ideas to new heights!

           </p>
            {/* Rounds Section */}
           <div className="mt-10 bg-white shadow-lg rounded-2xl p-6 border border-indigo-100">
             <h2 className="text-2xl font-bold text-indigo-700 text-center mb-6">Event Rounds</h2>
             <div className="space-y-6">
               <div className="flex items-start gap-4">
                 <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-700 font-bold">1</div>
                 <p className="text-gray-700 mt-2">
                   <span className="font-semibold text-indigo-800">Round 1</span> – 
                   5 mins founder
                 </p>
               </div>
               <div className="flex items-start gap-4">
                 <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-700 font-bold">2</div>
                 <p className="text-gray-700 mt-2">
                   <span className="font-semibold text-indigo-800">Round 2</span> – 
                   Quizonomics
                 </p>
               </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-700 font-bold">3</div>
                  <p className="text-gray-700 mt-2">
                    <span className="font-semibold text-indigo-800">Round 3</span> – 
                    The grand pitch
                  </p>
                </div>
                 {/* Event Details */}
           <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl shadow-md p-6 mt-8 text-left border border-indigo-200">
             <h3 className="text-xl text- font-semibold text-indigo-700 mb-4">Event Details</h3>
             <p className="text-gray-700"><strong>Date:</strong> September 27, 2025</p>
             <p className="text-gray-700"><strong>Time:</strong> 9 am - 5 pm</p>
             <p className="text-gray-700"><strong>Venue:</strong> Walchand College Of Engineering, Sangli</p>
             <p className="text-gray-700"><strong>Contact:</strong> Pranav Khot – +91 8329105091</p>
           </div>
              </div>
              
            </div>
          </div>

          {/* Registration Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <InputField
              label="Participant's Full Name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
            <InputField
              label="Participant's Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <InputField
              label="Participant's Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
            />
            <InputField
              label="Participant's College / Branch"
              name="college"
              type="text"
              value={formData.college}
              onChange={handleChange}
            />

            <SelectField
              label="Participant's Year Of Study"
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
              label="Participant's Branch Or Trade"
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
                "Electrical",
              ]}
            />

            <SelectField
              label="Team Members"
              name="teamMembers"
              value={formData.teamMembers}
              onChange={handleChange}
              options={["Group of 2", "Group of 3", "Group of 4"]}
            />

            {/* Conditional Team Member Names */}
            {formData.teamMembers === "Group of 2" && (
              <InputField
                label="Team Member 2 Name"
                name="team_member_name1"
                type="text"
                value={formData.team_member_name1}
                onChange={handleChange}
              />
            )}

            {formData.teamMembers === "Group of 3" && (
              <>
                <InputField
                  label="Team Member 2 Name"
                  name="team_member_name1"
                  type="text"
                  value={formData.team_member_name1}
                  onChange={handleChange}
                />
                <InputField
                  label="Team Member 3 Name"
                  name="team_member_name2"
                  type="text"
                  value={formData.team_member_name2}
                  onChange={handleChange}
                />
              </>
            )}

            {formData.teamMembers === "Group of 4" && (
              <>
                <InputField
                  label="Team Member 2 Name"
                  name="team_member_name1"
                  type="text"
                  value={formData.team_member_name1}
                  onChange={handleChange}
                />
                <InputField
                  label="Team Member 3 Name"
                  name="team_member_name2"
                  type="text"
                  value={formData.team_member_name2}
                  onChange={handleChange}
                />
                <InputField
                  label="Team Member 4 Name"
                  name="team_member_name3"
                  type="text"
                  value={formData.team_member_name3}
                  onChange={handleChange}
                />
              </>
            )}

            <SelectField
              label="Payment Mode"
              name="paymentMode"
              value={formData.paymentMode}
              onChange={handleChange}
              options={["Online", "Offline"]}
            />

            {/* QR Section */}
            {formData.teamMembers && (
              <div className="text-center my-6 p-6 bg-gray-50 rounded-xl shadow-md">
                <p className="mb-4 text-sm text-indigo-800 bg-indigo-100 border border-indigo-300 rounded-md p-3">
                  💡 If the amount is Paid in Offline method, upload the image
                  of the Receipt you were given.
                </p>
                <h4 className="mb-4 font-semibold text-lg text-gray-800">
                  Scan to Pay
                </h4>
                <div className="mx-auto flex items-center justify-center bg-white rounded-lg border border-gray-200 shadow-sm p-2 w-full max-w-[250px]">
                  <img
                    src={
                      formData.teamMembers === "Group of 4"
                        ? "/assets/QRs/Prasad_399.jpg"
                        : formData.teamMembers === "Group of 3"
                        ? "/assets/QRs/Prasad_299.jpg"
                        : "/assets/QRs/Prasad_199.jpg"
                    }
                    alt="Payment QR"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <p className="mt-3 text-sm text-gray-600">
                  UPI ID:{" "}
                  <span className="font-medium">
                    prasadbedage2030@oksbi
                  </span>
                </p>
              </div>
            )}

            {/* Transaction ID */}
            <div>
              <p className="mb-3 text-sm text-yellow-800 bg-yellow-100 border border-yellow-300 rounded-md p-2">
                For offline entries, please enter the ID given on your Receipt.
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

            {/* Screenshot Upload */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Payment Screenshot
              </label>
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
                  <span className="text-green-600 font-medium text-center px-2">
                    {screenshotName}
                  </span>
                ) : (
                  <span className="text-gray-500 text-sm text-center">
                    Click or drag & drop to upload
                  </span>
                )}
              </div>
              {uploadProgress > 0 && (
                <p className="text-sm text-gray-600 mt-2">
                  Uploading: {Math.round(uploadProgress)}%
                </p>
              )}
            </div>

            {/* Referral Code */}
            <InputField
              label="Referral Code"
              name="referralCode"
              type="text"
              value={formData.referralCode}
              onChange={handleChange}
            />

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full ${
                isSubmitting
                  ? "bg-gray-400"
                  : "bg-indigo-600 hover:bg-indigo-700"
              } text-white font-semibold py-2 px-6 rounded-lg`}
              whileTap={{ scale: 0.97 }}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* <SponsorSectionW /> */}
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
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export default IdeathonRegistration;
