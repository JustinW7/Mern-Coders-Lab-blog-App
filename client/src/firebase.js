// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-81ded.firebaseapp.com",
  projectId: "mern-blog-81ded",
  storageBucket: "mern-blog-81ded.appspot.com",
  messagingSenderId: "190629634828",
  appId: "1:190629634828:web:276d566dbb49f86fad9f29"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);