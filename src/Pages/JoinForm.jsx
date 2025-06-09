import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import { ref as dbRef, push, set } from 'firebase/database';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage, database } from '../firebase'; // adjust path as needed

const JoinForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preference1: '',
    reason1: '',
    preference2: '',
    reason2: '',
    preference3: '',
    reason3: '',
    resume: null,
    photo: null,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);


  // File input refs
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
    if (!formData.preference1) newErrors.preference1 = 'Preference 1 is required';
    if (!formData.reason1.trim()) newErrors.reason1 = 'Reason 1 is required';
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
      // Upload resume
      const resumeRef = storageRef(storage, `resumes/${formData.name}-${Date.now()}-${formData.resume.name}`);
      await uploadBytes(resumeRef, formData.resume);
      const resumeURL = await getDownloadURL(resumeRef);

      // Upload photo
      const photoRef = storageRef(storage, `photos/${formData.name}-${Date.now()}-${formData.photo.name}`);
      await uploadBytes(photoRef, formData.photo);
      const photoURL = await getDownloadURL(photoRef);

      // Save form data to Realtime Database
      const newEntryRef = push(dbRef(database, 'registrations'));
      await set(newEntryRef, {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        preference1: formData.preference1,
        reason1: formData.reason1,
        preference2: formData.preference2,
        reason2: formData.reason2,
        preference3: formData.preference3,
        reason3: formData.reason3,
        resumeURL,
        photoURL,
        submittedAt: new Date().toISOString(),
      });

      // Show success toast
      toast.success('🎉 Registration successful!');
      setLoading(false);

      // Reset form data and file inputs
      setFormData({
        name: '',
        phone: '',
        email: '',
        preference1: '',
        reason1: '',
        preference2: '',
        reason2: '',
        preference3: '',
        reason3: '',
        resume: null,
        photo: null,
      });
      
      resumeInputRef.current.value = '';
      photoInputRef.current.value = '';
    } catch (error) {
      console.error("❌ Firebase error:", error);
      toast.error('Submission failed. Please try again.');
      setLoading(false);
      setSubmitted(false);

    }
  };

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h2 style={styles.heading}>Join PACE</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>Full Name</label>
          <input name="name" value={formData.name} onChange={handleChange} style={styles.input} />
          {errors.name && <p style={styles.error}>{errors.name}</p>}

          <label style={styles.label}>Phone Number</label>
          <input name="phone" value={formData.phone} onChange={handleChange} style={styles.input} />
          {errors.phone && <p style={styles.error}>{errors.phone}</p>}

          <label style={styles.label}>Email</label>
          <input name="email" value={formData.email} onChange={handleChange} style={styles.input} />
          {errors.email && <p style={styles.error}>{errors.email}</p>}

          {/* Preference 1 */}
          <label style={styles.label}>1st Preference</label>
          <select name="preference1" value={formData.preference1} onChange={handleChange} style={styles.input}>
            <option value="">-- Select Preference --</option>
            {options.map((opt, idx) => (
              <option key={idx} value={opt}>{opt}</option>
            ))}
          </select>
          {errors.preference1 && <p style={styles.error}>{errors.preference1}</p>}

          <label style={styles.label}>Why this preference?</label>
          <textarea name="reason1" value={formData.reason1} onChange={handleChange} style={{ ...styles.input, height: '100px' }} />
          {errors.reason1 && <p style={styles.error}>{errors.reason1}</p>}

          {/* Preference 2 */}
          <label style={styles.label}>2nd Preference</label>
          <select name="preference2" value={formData.preference2} onChange={handleChange} style={styles.input}>
            <option value="">-- Select Preference --</option>
            {options.map((opt, idx) => (
              <option key={idx} value={opt}>{opt}</option>
            ))}
          </select>

          <label style={styles.label}>Why this preference?</label>
          <textarea name="reason2" value={formData.reason2} onChange={handleChange} style={{ ...styles.input, height: '100px' }} />

          {/* Preference 3 */}
          <label style={styles.label}>3rd Preference</label>
          <select name="preference3" value={formData.preference3} onChange={handleChange} style={styles.input}>
            <option value="">-- Select Preference --</option>
            {options.map((opt, idx) => (
              <option key={idx} value={opt}>{opt}</option>
            ))}
          </select>

          <label style={styles.label}>Why this preference?</label>
          <textarea name="reason3" value={formData.reason3} onChange={handleChange} style={{ ...styles.input, height: '100px' }} />

          {/* Resume Upload */}
          <label style={styles.label}>Upload Resume (PDF)</label>
          <input
            type="file"
            name="resume"
            onChange={handleChange}
            accept=".pdf"
            style={styles.input}
            ref={resumeInputRef}
          />
          {errors.resume && <p style={styles.error}>{errors.resume}</p>}

          {/* Photo Upload */}
          <label style={styles.label}>Upload Passport Photo (JPG/PNG)</label>
          <input
            type="file"
            name="photo"
            onChange={handleChange}
            accept="image/jpeg, image/png"
            style={styles.input}
            ref={photoInputRef}
          />
          {errors.photo && <p style={styles.error}>{errors.photo}</p>}

          <button type="submit"style={{...styles.button, opacity: loading ? 0.6 : 1, cursor: loading ? 'not-allowed' : 'pointer',}}
          disabled={loading}>{loading ? 'Submitting...' : 'Submit'}
          </button>

        </form>
  </div>
      {loading && (
        <div style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        color: '#fff',
        fontSize: '24px',
        fontWeight: 'bold'
      }}>
    Submitting Form...
  </div>
)}

      {/* Toast Notifications */}
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '30px',
    backgroundColor: '#111',
    color: '#fff',
    borderRadius: '12px',
    boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)',
    fontFamily: 'sans-serif',
  },
  heading: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#ffd700',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginTop: '16px',
    marginBottom: '6px',
    fontWeight: 'bold',
  },
  input: {
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #555',
    backgroundColor: '#222',
    color: '#fff',
    fontSize: '16px',
  },
  error: {
    color: 'red',
    fontSize: '14px',
    marginTop: '4px',
  },
  button: {
    marginTop: '24px',
    padding: '12px',
    backgroundColor: '#ffd700',
    color: '#000',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default JoinForm;
