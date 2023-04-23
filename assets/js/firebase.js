// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkDe5A6YCSx9aKr_6CpxvkV0Jqj9grZP4",
  authDomain: "portfolio-de73a.firebaseapp.com",
  projectId: "portfolio-de73a",
  storageBucket: "portfolio-de73a.appspot.com",
  messagingSenderId: "520961447558",
  appId: "1:520961447558:web:fdf4a0b92a52615dbb6307",
  measurementId: "G-J5HB18BNBP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);