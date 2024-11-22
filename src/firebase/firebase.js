import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0wWWiLnRacPG0Ockw-KVfT4NvFOBAMD4",
  authDomain: "scenesnap-f84fd.firebaseapp.com",
  projectId: "scenesnap-f84fd",
  storageBucket: "scenesnap-f84fd.firebasestorage.app",
  messagingSenderId: "834407812304",
  appId: "1:834407812304:web:800920491fdf77ad30a2d5",
  measurementId: "G-0KT4DPZK77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // if you need Firestore
export const storage = getStorage(app);

export default app;
