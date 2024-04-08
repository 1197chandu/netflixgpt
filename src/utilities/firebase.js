// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEOCd2vHwcsWQw3wiLAaEELLJA1Rby_vg",
  authDomain: "netflixgpt-77ccf.firebaseapp.com",
  projectId: "netflixgpt-77ccf",
  storageBucket: "netflixgpt-77ccf.appspot.com",
  messagingSenderId: "742331289888",
  appId: "1:742331289888:web:317c69cfdc04ff826a8745",
  measurementId: "G-6F11F54ZX8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
