// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrRWaQiYXjRdjPpC4dICUh63bm1sy7a88",
  authDomain: "mls-liceo-app.firebaseapp.com",
  projectId: "mls-liceo-app",
  storageBucket: "mls-liceo-app.appspot.com",
  messagingSenderId: "484911625936",
  appId: "1:484911625936:web:6566ce09391e38fb3ed0d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const auth = getAuth(); // getAuth() does not require the app parameter
const provider = new GoogleAuthProvider();

export { database, auth, provider };