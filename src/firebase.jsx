import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBh_qm0OZSr2YeBTyOwnYMhcG7shXfOAkE",
  authDomain: "disneyplus-clone-4be43.firebaseapp.com",
  projectId: "disneyplus-clone-4be43",
  storageBucket: "disneyplus-clone-4be43.appspot.com",
  messagingSenderId: "939911669659",
  appId: "1:939911669659:web:ce36ff0576bc21d928e33e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig); // initialize a firebase-App
const db = firebaseApp.firestore(); // create a database
const auth = firebase.auth(); // firebase-authentication
const provider = new firebase.auth.GoogleAuthProvider(); // provide a google authentication
const storage = firebase.storage(); // firebase storage for store data

export { auth, storage, provider };
export default db;
