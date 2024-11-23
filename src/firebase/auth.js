import axios from 'axios';
import { baseURL } from '../components/userIDConfig';
import { auth, db } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signOut,
} from "firebase/auth";
import { doc, setDoc, addDoc, collection, serverTimestamp } from "firebase/firestore"; 

// Register a new user with email and password
export const doSignUpWithEmailAndPassword = async (email, password, username, name, surname, phoneNumber) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const userid = userCredential.user.uid;

    console.log("asdasd", userCredential.user.uid);
    console.log("asdasd:",{userid ,username, name, surname, email, phoneNumber });
    // const response = await axios.post(`${baseURL}/customer/addNewCustomer/${user.uid}/${username}/${name}/${surname}/${email}/${phoneNumber}`);
    const response = await axios.post(`${baseURL}/customer/addNewCustomer`, null, {
      params: {
        cs_id: userid,
        cs_username: username,
        cs_name: name,
        cs_surname: surname,
        cs_email: email,
        cs_phone_number: phoneNumber,
      },
    });
    await signOut(auth);
    return userCredential;
  } catch (error) {
    console.error("Error signing up with email and password:", error);
    throw error;
  }
};

// Sign in a user with email and password
export const doSignInWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential;
  } catch (error) {
    console.error("Error signing in with email and password:", error);
    throw error;
  }
};

// Sign in a user with Google
export const doSignInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const token = await user.getIdToken();
    console.log("Google OAuth Token:", token);
    
    const credentialResponse = GoogleAuthProvider.credentialFromResult(result);
    console.log("Credential Response:", credentialResponse);
    console.log("Credential Response:", user);

    console.log("User Name:", user.displayName, user.uid, user.email, user.photoURL);
    console.log("Profile Picture URL:", user.photoURL);
    // const response = await axios.post(`${baseURL}/users/addNewUser/${user.uid}/${user.displayName}/${user.email}/?profilePicUrl=${user.photoURL}`);
    
    return user;
  } catch (error) {
    console.error("Error signing in with Google:", error);
    throw error;
  }
};

// Sign in a user with Facebook
export const doSignInWithFacebook = async () => {
  try {
    const provider = new FacebookAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    // You can add the user to Firestore here if needed
    return user;
  } catch (error) {
    console.error("Error signing in with Facebook:", error);
    throw error;
  }
};

// Sign out the current user
export const doSignOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
};

// Send a password reset email
export const doPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert('Email sent')
  } catch (error) {
    console.error("Error sending password reset email:", error);
    alert('errorMessage')
    throw error;
  }
};

// Change the current user's password
export const doPasswordChange = async (password) => {
  if (!auth.currentUser) {
    throw new Error("No user is currently signed in.");
  }

  try {
    await updatePassword(auth.currentUser, password);
  } catch (error) {
    console.error("Error updating password:", error);
    throw error;
  }
};

// Send email verification to the current user
export const doSendEmailVerification = async () => {
  if (!auth.currentUser) {
    throw new Error("No user is currently signed in.");
  }

  try {
    await sendEmailVerification(auth.currentUser, {
      url: `${window.location.origin}/home`,
    });
  } catch (error) {
    console.error("Error sending email verification:", error);
    throw error;
  }
};
