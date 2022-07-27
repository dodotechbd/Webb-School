// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADnEzfBBgWA6mTcaAEWQkJMugmNFSz2WE",
  authDomain: "webb-school.firebaseapp.com",
  projectId: "webb-school",
  storageBucket: "webb-school.appspot.com",
  messagingSenderId: "845319038305",
  appId: "1:845319038305:web:1974e584a02a239e09d120"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;