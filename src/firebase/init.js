// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoLccjcFC0NNoMijwEgnJCpAuNY1pEQpk",
  authDomain: "nav-copy.firebaseapp.com",
  projectId: "nav-copy",
  storageBucket: "nav-copy.firebasestorage.app",
  messagingSenderId: "285912413623",
  appId: "1:285912413623:web:87090c051e3fad500e6432"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()