// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWgHZjvYemAxtrXLWdnp1ABtxzR0_rzR0",
  authDomain: "travel-agency-c27e0.firebaseapp.com",
  projectId: "travel-agency-c27e0",
  storageBucket: "travel-agency-c27e0.firebasestorage.app",
  messagingSenderId: "1022693047162",
  appId: "1:1022693047162:web:3c01f128b134b3c1eff4c3",
  measurementId: "G-NLPJHCY0W9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
