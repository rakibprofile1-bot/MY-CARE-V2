import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTBu3z4MpmFQsAGW2FP6KuE6SppxOwFiI",
  authDomain: "my-care-bfb60.firebaseapp.com",
  projectId: "my-care-bfb60",
  storageBucket: "my-care-bfb60.firebasestorage.app",
  messagingSenderId: "612613602756",
  appId: "1:612613602756:web:64e0b7980fd3a6d8013891",
  measurementId: "G-TX6DBQ5D8G",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);