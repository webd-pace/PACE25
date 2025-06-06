// firebase.js
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
apiKey: "AIzaSyAavPmZrAKvlTt62G-8zVzmcNj4Oz3NmRk",
  authDomain: "joint-board-form-c2c88.firebaseapp.com",
  projectId: "joint-board-form-c2c88",
  storageBucket: "joint-board-form-c2c88.firebasestorage.app",
  messagingSenderId: "609148234027",
  appId: "1:609148234027:web:dbf03ff9542401ba6d7d6e",
  measurementId: "G-SENP5JDEVZ",
  databaseURL:"https://joint-board-form-c2c88-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const database = getDatabase(app);
