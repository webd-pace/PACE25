// firebasePrudence.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebasePrudenceConfig = {
  apiKey: "AIzaSyAcxiYigRz1QfrbRICRvkfTSpAnqpeGhEI",
  authDomain: "prudence2k25.firebaseapp.com",
  projectId: "prudence2k25",
  storageBucket: "prudence2k25.firebasestorage.app",
  messagingSenderId: "598361612784",
  appId: "1:598361612784:web:4ed825631a24291b12fd35",
  measurementId: "G-8KPCGH1HCZ"
};


const prudenceApp = initializeApp(firebasePrudenceConfig, "prudence"); // Named app

export const prudenceDb = getFirestore(prudenceApp);
export const prudenceStorage = getStorage(prudenceApp);
