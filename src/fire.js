// Import the functions you need from the SDKs you need
import firebase  from "firebase";
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCcee-Y3u4wFXl7Vqo46JROcy3Xv6D80cY",
  authDomain: "teevro-ba3d6.firebaseapp.com",
  projectId: "teevro-ba3d6",
  storageBucket: "teevro-ba3d6.appspot.com",
  messagingSenderId: "469267057796",
  appId: "1:469267057796:web:fbdf0a6d75c36191a3c6d1"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;