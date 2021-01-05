// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDmBezxLblMAaohYBQd6l6p89V27MBoqq4",
    authDomain: "polls-3a0cb.firebaseapp.com",
    databaseURL: "https://polls-3a0cb.firebaseio.com",
    projectId: "polls-3a0cb",
    storageBucket: "polls-3a0cb.appspot.com",
    messagingSenderId: "572064913048",
    appId: "1:572064913048:web:1334323bd2defce35a22ed",
    measurementId: "G-QZKSZ9P34M"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;