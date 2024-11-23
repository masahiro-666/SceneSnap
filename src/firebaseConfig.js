import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
const auth = getAuth(app);

export { auth };