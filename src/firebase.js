// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxtGLzzGW351U-Sp47DxnKfkf_bt1_dYQ",
  authDomain: "email-password-authentic-123a1.firebaseapp.com",
  projectId: "email-password-authentic-123a1",
  storageBucket: "email-password-authentic-123a1.firebasestorage.app",
  messagingSenderId: "369359051261",
  appId: "1:369359051261:web:f0002538f7434fb72b6194"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);