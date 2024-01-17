// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu8CsPcHpzTweaVEKOxr9bIHKrw-Jl-Us",
  authDomain: "bikeformers-dev.firebaseapp.com",
  projectId: "bikeformers-dev",
  storageBucket: "bikeformers-dev.appspot.com",
  messagingSenderId: "211237151714",
  appId: "1:211237151714:web:54a2d7d4ac90565f148fbb",
  measurementId: "G-F3HGQEY57R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
