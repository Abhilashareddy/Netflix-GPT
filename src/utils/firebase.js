// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfKAQfUm2-mqnhNA0Y8KExWxEdJVgrswY",
  authDomain: "netflixgpt-c23af.firebaseapp.com",
  projectId: "netflixgpt-c23af",
  storageBucket: "netflixgpt-c23af.appspot.com",
  messagingSenderId: "275809374113",
  appId: "1:275809374113:web:eca4c893e7da05db3a05e0",
  measurementId: "G-LGS4SBVV4N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();