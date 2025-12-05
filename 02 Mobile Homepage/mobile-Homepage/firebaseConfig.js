import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Configuração atualizada do CafeteriaAnna
const firebaseConfig = {
  apiKey: "AIzaSyBbMTb8zThagZGrSE5sR2x8jVvxSV7tHd4",
  authDomain: "cafeteriaanna-a355e.firebaseapp.com",
  projectId: "cafeteriaanna-a355e",
  storageBucket: "cafeteriaanna-a355e.firebasestorage.app",
  messagingSenderId: "686982339512",
  appId: "1:686982339512:web:63d0e688750e11f37acd4d",
  measurementId: "G-CY1WHD72T0"
};

// Inicializa o Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);