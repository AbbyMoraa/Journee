import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyDon2CB8e-FKtJRH-PIwPXk5RiyEpzTScI",
  authDomain: "journee-749bd.firebaseapp.com",
  projectId: "journee-749bd",
  storageBucket: "journee-749bd.appspot.com",
  messagingSenderId: "149624148257",
  appId: "1:149624148257:web:73848145911d0e335d6e60",
  measurementId: "G-3P8QRNTNWE"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 







