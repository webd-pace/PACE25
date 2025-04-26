// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBydQdBoFd6EbuBoKUKdnWnA3TApkTwkKs",
  authDomain: "pace25-7a4a4.firebaseapp.com",
  databaseURL: "https://pace25-7a4a4-default-rtdb.firebaseio.com",
  projectId: "pace25-7a4a4",
  storageBucket: "pace25-7a4a4.firebasestorage.app",
  messagingSenderId: "818104945909",
  appId: "1:818104945909:web:126b009235012185f6c9bc",
  measurementId: "G-7MX704X7G9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);