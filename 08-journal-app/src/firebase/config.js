// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'
import { getEnviroments } from "../helpers";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
} = getEnviroments()

// Your web app's Firebase configuration
//Dev/Prod
// const firebaseConfig = {
//   apiKey: "AIzaSyAOZT8eRHTzDt3JQVQazDCoyePll0P32R0",
//   authDomain: "react-cursos-27dea.firebaseapp.com",
//   projectId: "react-cursos-27dea",
//   storageBucket: "react-cursos-27dea.appspot.com",
//   messagingSenderId: "622582451197",
//   appId: "1:622582451197:web:f67e1887481db0de636794"
// };



// Testing
// const firebaseConfig = {
//   apiKey: "AIzaSyDpBbqhmhSf2uAKrDqsvIyRbs5kMRk0t90",
//   authDomain: "tests-curso-react-d95b3.firebaseapp.com",
//   projectId: "tests-curso-react-d95b3",
//   storageBucket: "tests-curso-react-d95b3.appspot.com",
//   messagingSenderId: "401257268422",
//   appId: "1:401257268422:web:a7cbb7919ad3b614ed03c7"
// };


const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID
};


// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)