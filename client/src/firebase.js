
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, 
  authDomain: "mern-blog2-54b55.firebaseapp.com",
  projectId: "mern-blog2-54b55",
  storageBucket: "mern-blog2-54b55.appspot.com",
  messagingSenderId: "609310463642",
  appId: "1:609310463642:web:32bd8e6adb90dce1497123"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);