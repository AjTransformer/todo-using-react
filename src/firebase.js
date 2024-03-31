// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

//we need to connect to firestore lib present inside firebase. for that we will use this lib inside lib(we have stored that inside a variable name->myFirebase)
// app lib contains 2 imp things ie initializeApp() , firestore()
import myFirebase from "firebase/compat/app";

// import { getAuth , GoogleAuthProvide } from "firebase/auth"
import { getAuth, GoogleAuthProvider } from "firebase/auth";


import "firebase/compat/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_zT896gRvQszpXXcjmDjfqO9rG34I7yY",
  authDomain: "todowithreact-38c49.firebaseapp.com",
  projectId: "todowithreact-38c49",
  storageBucket: "todowithreact-38c49.appspot.com",
  messagingSenderId: "1006281309671",
  appId: "1:1006281309671:web:c384a7f0fb1dd8991d9142",
  measurementId: "G-MS3B64K6JK"
};

// // Initialize Firebase(connect to firebase)
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase(connect to firebase, changed in class)
const app = myFirebase.initializeApp(firebaseConfig);

//using database we will insert or read data from the database...
export const database = myFirebase.firestore()

export const myAuth = getAuth(app)

export const myProvider = new GoogleAuthProvider()