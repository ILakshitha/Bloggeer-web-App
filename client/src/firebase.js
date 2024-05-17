// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-abb4f.firebaseapp.com",
  projectId: "mern-blog-abb4f",
  storageBucket: "mern-blog-abb4f.appspot.com",
  messagingSenderId: "108517846521",
  appId: "1:108517846521:web:c8094a2f9a06a310e3e128"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
export const app = initializeApp(firebaseConfig);

