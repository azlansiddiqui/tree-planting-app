// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqTx5-C49kN8mJG-Y8-3DHU6cittrNVqo",
  authDomain: "green-map-592e0.firebaseapp.com",
  databaseURL: "https://green-map-592e0-default-rtdb.firebaseio.com",
  projectId: "green-map-592e0",
  storageBucket: "green-map-592e0.firebasestorage.app",
  messagingSenderId: "428367667362",
  appId: "1:428367667362:web:cd2c8ee4044ed4ecddb7fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)