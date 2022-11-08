// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB43PcC8PPb1nndQmuJWKulUseCMHEKnqs",
    authDomain: "astrum-73b1c.firebaseapp.com",
    projectId: "astrum-73b1c",
    storageBucket: "astrum-73b1c.appspot.com",
    messagingSenderId: "723907613354",
    appId: "1:723907613354:web:c9de52ac63f17bef52b6d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
export default app;
export { auth, db };