// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJtDJrflHj7hhnyuGCOWQnHOSAcWgb8y8",
    authDomain: "fir-proyect-d958e.firebaseapp.com",
    projectId: "fir-proyect-d958e",
    storageBucket: "fir-proyect-d958e.appspot.com",
    messagingSenderId: "481106456864",
    appId: "1:481106456864:web:e382711681ee728947a745",
    measurementId: "G-L73RZ66PQ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth }