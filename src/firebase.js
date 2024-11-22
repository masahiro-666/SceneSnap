// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;