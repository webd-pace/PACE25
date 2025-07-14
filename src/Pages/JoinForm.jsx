import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import { ref as dbRef, push, set } from 'firebase/database';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage, database } from '../firebase'; // adjust path as needed
import PopupMessage from '../components/PopupMessage';
import { useNavigate } from 'react-router-dom';



const JoinForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    Branch: '',
    LinkedIn: '',
    PRN: '',
    preference1: '',
    reason1: '',
    preference2: '',
    reason2: '',
    preference3: '',
    reason3: '',
    Describe: '',
    Why_Pace: '',
    Initiatives: '',
    resume: null,
    photo: null,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const navigate = useNavigate();

  const resumeInputRef = useRef(null);
  const photoInputRef = useRef(null);

  const options = [
    'Joint Secretary',
    'Joint Program Director of Events',
    'Joint Program Director of Finance',
    'Joint Program Director of Publicity',
    'Joint Skill Developer in Personality',
    'Joint Skill Developer in Writing',
    'Joint Art Developer',
    'Joint Video Editor',
    'Joint Aptitude Developer',
    'Joint Resource Manager',
    'Joint Web Developer',
    'Joint Pacer'
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.Branch.trim()) newErrors.Branch = 'Branch is required';
    if (!formData.LinkedIn.trim()) newErrors.LinkedIn = 'LinkedIn profile';
    if (!formData.PRN.trim()) newErrors.PRN = 'PRN is required';
    if (!formData.preference1) newErrors.preference1 = 'Preference 1 is required';
    if (!formData.reason1.trim()) newErrors.reason1 = 'Reason 1 is required';
    if (!formData.preference2) newErrors.preference2 = 'Preference 2 is required';
    //if (!formData.reason2.trim()) newErrors.reason2 = 'Reason 2 is required';
    if (!formData.preference3) newErrors.preference3 = 'Preference 3 is required';
    //if (!formData.reason3.trim()) newErrors.reason3 = 'Reason 3 is required';
    if (!formData.Describe.trim()) newErrors.Describe = 'Description is required';
    if (!formData.Why_Pace.trim()) newErrors.Why_Pace = 'Why Pace is required';
    if (!formData.Initiatives.trim()) newErrors.Initiatives = 'Initiatives is required';
    if (!formData.resume) newErrors.resume = 'Resume is required';
    if (!formData.photo) newErrors.photo = 'Photo is required';
    else {
      const validResume = ['application/pdf'];
      const validPhotos = ['image/jpeg', 'image/png'];
      if (formData.resume && !validResume.includes(formData.resume.type)) {
        newErrors.resume = 'Resume must be a PDF file';
      }
      if (formData.photo && !validPhotos.includes(formData.photo.type)) {
        newErrors.photo = 'Photo must be JPG or PNG';
      }
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);
    setSubmitted(true);

    try {
      const resumeRef = storageRef(storage, `resumes/${formData.name}-${Date.now()}-${formData.resume.name}`);
      await uploadBytes(resumeRef, formData.resume);
      const resumeURL = await getDownloadURL(resumeRef);

      const photoRef = storageRef(storage, `photos/${formData.name}-${Date.now()}-${formData.photo.name}`);
      await uploadBytes(photoRef, formData.photo);
      const photoURL = await getDownloadURL(photoRef);

      const newEntryRef = push(dbRef(database, 'registrations'));
      await set(newEntryRef, {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        Branch: formData.Branch,
        LinkedIn: formData.LinkedIn,
        PRN: formData.PRN, 
        preference1: formData.preference1,
        reason1: formData.reason1,
        preference2: formData.preference2,
        reason2: formData.reason2,
        preference3: formData.preference3,
        reason3: formData.reason3,
        Describe: formData.Describe,
        Why_Pace: formData.Why_Pace,
        Initiatives: formData.Initiatives,
        resumeURL,
        photoURL,
        submittedAt: new Date().toISOString(),
      });
      
      
     setPopupMessage(<>
     🎉 Registration successful! You will be contacted soon.
     <br/>
     <br/>
        We will Contact you soon. 
     </> );

      setLoading(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        Branch: '',
        preference1: '',
        reason1: '',
        preference2: '',
        reason2: '',
        preference3: '',
        reason3: '',
        Describe: '',
        Why_Pace: '',
        Initiatives: '',
        LinkedIn: '',
        PRN: '',
        resume: null,
        photo: null,
      });
      resumeInputRef.current.value = '';
      photoInputRef.current.value = '';
    } 
    catch (error) {
      console.error("❌ Firebase error:", error);
      toast.error('Submission failed. Please try again.');
      setLoading(false);
      setSubmitted(false);
    }
    setTimeout(() => {
      navigate('/thankyou');
      }, 3000); // Optional delay to allow the popup to show

  };

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto mt-10 p-8 bg-gray-900 text-white rounded-xl shadow-2xl font-sans">
        <h2 className="text-3xl font-bold mb-6 text-center text-yellow-400 font-cinzel-decorative">Joint-Board Registration Forms</h2>

        { /* Accent line below the title */}
        <div className="flex justify-center mt-6 mb-10">
          <span className="block w-20 h-1 bg-yellow-400 rounded-full"></span>
        </div>
      
      <div className="mx-auto p-2 bg-gray-900 text-white rounded-xl shadow-2xl font-sans">
        <h3 calssname= "text-3xl mt-4 mb-1 font-bold underline decoration-2 pd-2">Instructions:</h3>

        <ul className="list-disc pl-6 text-gray-300">
          <li>Fill all the details correctly.</li>
          <li>Provide the email id of college wherever required ( eg: piyush.dawkhare@walchandsangli.ac.in)</li>
          <li>Ensure all information is accurate.</li>
          <li>Do not upload selfie in the section of passport size photo.</li>
          <li>Upload your resume in PDF format and a passport-sized photo in JPG/PNG format.</li>
          <li>The candidate should bring the same resume which he/she has uploaded in the form.</li>
          <li>You should be present in the college campus during interview hours.</li>
        </ul>
      </div>
      <div className="mt-10 border-t border-yellow-400/20 pt-6 text-center text-sm text-gray-400"></div>
        
        <form onSubmit={handleSubmit} className="flex flex-col">
          {/* Name */}
          <label className="mt-4 mb-1 font-semibold">  Full Name <span className="text-red-500">*</span> </label>
          <input name="name" value={formData.name} onChange={handleChange} className="p-3 rounded-md bg-gray-800 border border-gray-600 text-white" />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}

          {/* Phone */}
          <label className="mt-4 mb-1 font-semibold">Phone Number <span className="text-red-500">*</span></label>
          <input name="phone" value={formData.phone} onChange={handleChange} className="p-3 rounded-md bg-gray-800 border border-gray-600 text-white" />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}

          {/* Email */}
          <label className="mt-4 mb-1 font-semibold">Email <span className="text-red-500">*</span></label>
          <input name="email" value={formData.email} onChange={handleChange} className="p-3 rounded-md bg-gray-800 border border-gray-600 text-white" />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}

          {/* Branch */}
          <label className="mt-4 mb-1 font-semibold">Branch <span className="text-red-500">*</span></label>
          <select name="Branch" value={formData.Branch} onChange={handleChange} className="w-full p-3 rounded-md bg-gray-800 border border-gray-600 text-white"> 
          <option value="">-- Select Branch --</option>
          <option value="Computer Science">S.Y. CSE</option>
          <option value="Information Technology">S.Y. IT</option>
          <option value="Electronics">S.Y. Electronics</option>
          <option value="Electrical">S.Y. Electrical</option>
          <option value="Mechanical">S.Y. Mechanical</option>
          <option value="Civil">S.Y. Civil</option>
          <option value="AIML">S.Y. AIML</option>
          <option value="Robotics">S.Y. Robotics</option>
          </select>
          {errors.Branch && <p className="text-red-500 text-sm mt-1">{errors.Branch}</p>}

          {/* PRN */}
          <label className="mt-4 mb-1 font-semibold">PRN <span className="text-red-500">*</span></label>
          <input name="PRN" value={formData.PRN} onChange={handleChange} className="p-3 rounded-md bg-gray-800 border border-gray-600 text-white" />
          {errors.PRN && <p className="text-red-500 text-sm mt-1">{errors.PRN}</p>}

          {/* Linked_In */}
          <label className="mt-4 mb-1 font-semibold">Linked In URL (N.A if not available)</label>
          <input name="LinkedIn" value={formData.LinkedIn} onChange={handleChange} className="p-3 rounded-md bg-gray-800 border border-gray-600 text-white" />
          {errors.LinkedIn && <p className="text-red-500 text-sm mt-1">{errors.LinkedIn}</p>}

          {/* Preferences */}
{[1, 2, 3].map((num) => {
  const ordinal = num === 1 ? "1st" : num === 2 ? "2nd" : "3rd";
  const isFirst = num === 1;

  return (
    <div key={num} className="mt-6">
      {/* Preference Label */}
      <label className="block mb-1 font-semibold">
        {ordinal} Preference <span className="text-red-500">*</span>
      </label>
      <select
        name={`preference${num}`}
        value={formData[`preference${num}`]}
        onChange={handleChange}
        className="w-full p-3 rounded-md bg-gray-800 border border-gray-600 text-white"
      >
        <option value="">-- Select Preference --</option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {isFirst && errors.preference1 && (
        <p className="text-red-500 text-sm mt-1">{errors.preference1}</p>
      )}

      {/* Reason Label with red asterisk for first only */}
      <label className="block mt-4 mb-1 font-semibold">
         Why this preference? {isFirst && <span className="text-red-500">*</span>}
      </label>

      {/* Only the 1st reason is compulsory */}
      <textarea
        name={`reason${num}`}
        value={formData[`reason${num}`]}
        onChange={handleChange}
        className="w-full p-3 rounded-md bg-gray-800 border border-gray-600 text-white h-24"
        required={isFirst}
      />
      {isFirst && errors.reason1 && (
        <p className="text-red-500 text-sm mt-1">{errors.reason1}</p>
      )}
    </div>
  );
})}


          {/* Describe Yourself */}
          <label className="mt-4 mb-1 font-semibold">Describe yourself and why should we take you on board? <span className="text-red-500">*</span></label>
          <input name="Describe" value={formData.Describe} onChange={handleChange} className="p-3 rounded-md bg-gray-800 border border-gray-600 text-white" />
          {errors.Describe && <p className="text-red-500 text-sm mt-1">{errors.Describe}</p>}

          {/* Why do you want to Join Pace */}
          <label className="mt-4 mb-1 font-semibold">Why do you want to join Pace? <span className="text-red-500">*</span></label>
          <input name="Why_Pace" value={formData.Why_Pace} onChange={handleChange} className="p-3 rounded-md bg-gray-800 border border-gray-600 text-white" />
          {errors.Why_Pace && <p className="text-red-500 text-sm mt-1">{errors.Why_Pace}</p>}

          {/* Initiatives */}
          <label className="mt-4 mb-1 font-semibold">What new initiatives would you bring to Pace? <span className="text-red-500">*</span></label>
          <input name="Initiatives" value={formData.Initiatives} onChange={handleChange} className="p-3 rounded-md bg-gray-800 border border-gray-600 text-white" />
          {errors.Initiatives && <p className="text-red-500 text-sm mt-1">{errors.Initiatives}</p>}

          {/* Resume Upload */}
          <label className="mt-4 mb-1 font-semibold">Upload Resume (PDF) <span className="text-red-500">*</span></label>
          <input type="file" name="resume" onChange={handleChange} accept=".pdf" ref={resumeInputRef} className="p-3 rounded-md bg-gray-800 border border-gray-600 text-white" />
          {errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume}</p>}

          {/* Photo Upload */}
          <label className="mt-4 mb-1 font-semibold">Upload Passport Photo (JPG/PNG) <span className="text-red-500">*</span></label>
          <input type="file" name="photo" onChange={handleChange} accept="image/jpeg, image/png" ref={photoInputRef} className="p-3 rounded-md bg-gray-800 border border-gray-600 text-white" />
          {errors.photo && <p className="text-red-500 text-sm mt-1">{errors.photo}</p>}

          {/* Submit Button */}
          <button type="submit" disabled={loading}
            className={`mt-6 py-3 px-6 rounded-lg font-bold text-black text-lg bg-yellow-400 ${loading ? 'opacity-60 cursor-not-allowed' : 'hover:bg-yellow-300'}`}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>

    {popupMessage && (
      <PopupMessage
      message={popupMessage}
      onClose={() => setPopupMessage('')}
      duration={3000}
      />
    )}


     {loading && <Loader />}
     <br /><br />
     <Footer />
    </>
  );
};

export default JoinForm;
