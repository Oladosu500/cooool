// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRU9H_-HO8uKfKAuLXiUa2745j-PzuK7Y",
  authDomain: "demourl-40cfe.firebaseapp.com",
  projectId: "demourl-40cfe",
  storageBucket: "demourl-40cfe.appspot.com",
  messagingSenderId: "509051980494",
  appId: "1:509051980494:web:1ff0ac28bcc10378c11e9f",
  measurementId: "G-PDKX1WV7LF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export default app;