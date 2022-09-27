// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4mNyoZOTCofELwsDC1IF_lHTtJO9FbtM",
  authDomain: "react-ci-cd-demo-dd48a.firebaseapp.com",
  projectId: "react-ci-cd-demo-dd48a",
  storageBucket: "react-ci-cd-demo-dd48a.appspot.com",
  messagingSenderId: "765406829841",
  appId: "1:765406829841:web:d2ff55fd147a8f729e40b0"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters( { prompt: 'select_account' } )
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)