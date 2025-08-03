// src/components/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCrBgt1ecLrnHI7dEtEpFgcYAPnvJGP5vI",
  authDomain: "sri-vyra-auth.firebaseapp.com",
  projectId: "sri-vyra-auth",
  storageBucket: "sri-vyra-auth.appspot.com",
  messagingSenderId: "746425074512",
  appId: "1:746425074512:web:6de516a4b480740aa32255",
  measurementId: "G-X57K4YZ69B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export initialized services
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
