// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPZRdlYaw2x6obeqWRIQ8zJhK2-oFq3ZY",
  authDomain: "pius-c9756.firebaseapp.com",
  projectId: "pius-c9756",
  storageBucket: "pius-c9756.firebasestorage.app",
  messagingSenderId: "710515320653",
  appId: "1:710515320653:web:9d0d00fa8e1025910e7904",
  measurementId: "G-1MHP0MM2K1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
