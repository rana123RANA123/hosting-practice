// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtjHxIHmudB-g_ljbzutVCJShR6dzlICY",
  authDomain: "new-hosting-practice.firebaseapp.com",
  projectId: "new-hosting-practice",
  storageBucket: "new-hosting-practice.appspot.com",
  messagingSenderId: "675746028043",
  appId: "1:675746028043:web:0f03123eef362c9055450e",
  measurementId: "G-EC40FB05TB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);