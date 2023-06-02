// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2FKcaFGTyQxR411R5tyuT5connsXcNBI",
  authDomain: "react-7fa07.firebaseapp.com",
  projectId: "react-7fa07",
  storageBucket: "react-7fa07.appspot.com",
  messagingSenderId: "626682237743",
  appId: "1:626682237743:web:208d4b4db2288e88b107da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);