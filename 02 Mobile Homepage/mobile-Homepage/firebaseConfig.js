import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAMcnRgrkJgLO3mxWGkobYisMGgWvSHXYs",
  authDomain: "aulanative01.firebaseapp.com",
  projectId: "aulanative01",
  storageBucket: "aulanative01.firebasestorage.app",
  messagingSenderId: "861644474902",
  appId: "1:861644474902:web:c99e8ea7c09fc107388337",
  measurementId: "G-PHF5PDDHX3"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)