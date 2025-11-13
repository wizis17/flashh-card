// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAaHWOYyv9sKge8r1JvR9sj9FA4eSUaH5I",
    authDomain: "word-card-af459.firebaseapp.com",
    projectId: "word-card-af459",
    storageBucket: "word-card-af459.firebasestorage.app",
    messagingSenderId: "446827244800",
    appId: "1:446827244800:web:e5655714a955442b6e97e5",
    measurementId: "G-Q3CJB6N1VN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);