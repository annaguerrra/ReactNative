// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbMTb8zThagZGrSE5sR2x8jVvxSV7tHd4",
  authDomain: "cafeteriaanna-a355e.firebaseapp.com",
  projectId: "cafeteriaanna-a355e",
  storageBucket: "cafeteriaanna-a355e.firebasestorage.app",
  messagingSenderId: "686982339512",
  appId: "1:686982339512:web:63d0e688750e11f37acd4d",
  measurementId: "G-CY1WHD72T0"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)