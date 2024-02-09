// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhra96O8n057vkL96lZEm04vyUPoT1lA4",
  authDomain: "romsem-7f92c.firebaseapp.com",
  projectId: "romsem-7f92c",
  storageBucket: "romsem-7f92c.appspot.com",
  messagingSenderId: "270993738881",
  appId: "1:270993738881:web:4ed9b7e8c1c93395039180",
  measurementId: "G-5QMP8ZWKDR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;