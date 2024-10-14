// npm install
// npm intasll firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBS_hWi6tSuFWZjqPqJVHmTAsRkIleenmU",
    authDomain: "task-management-system-e4a6c.firebaseapp.com",
    projectId: "task-management-system-e4a6c",
    storageBucket: "task-management-system-e4a6c.appspot.com",
    messagingSenderId: "753321199618",
    appId: "1:753321199618:web:78af00155fca3b99473f1b",
    measurementId: "G-ZMY7NG933L"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // Commenting this out for now
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider, doc, setDoc };
