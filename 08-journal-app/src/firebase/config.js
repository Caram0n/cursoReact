// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOZT8eRHTzDt3JQVQazDCoyePll0P32R0",
  authDomain: "react-cursos-27dea.firebaseapp.com",
  projectId: "react-cursos-27dea",
  storageBucket: "react-cursos-27dea.appspot.com",
  messagingSenderId: "622582451197",
  appId: "1:622582451197:web:f67e1887481db0de636794"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)