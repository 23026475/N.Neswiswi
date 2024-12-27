// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSUoohWlGd7Xb4smk1q9EKA9hJLNZp-RQ",
  authDomain: "portfolio-d2a27.firebaseapp.com",
  projectId: "portfolio-d2a27",
  storageBucket: "portfolio-d2a27.firebasestorage.app",
  messagingSenderId: "711943346108",
  appId: "1:711943346108:web:817ef83fca0354f2f33db9",
  measurementId: "G-KT0S9VLNBC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);