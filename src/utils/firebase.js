// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNUWMM8t29x2jLhwn02KXt504qQUHi7IY",
  authDomain: "netflixgpt-2b318.firebaseapp.com",
  projectId: "netflixgpt-2b318",
  storageBucket: "netflixgpt-2b318.firebasestorage.app",
  messagingSenderId: "89525256048",
  appId: "1:89525256048:web:a0f54478a9a4bb3aca59b5",
  measurementId: "G-J0HNJY40BT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
