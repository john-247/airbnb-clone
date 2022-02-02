import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDYT5kMORRLk8uojzI6em3tj3iN2ah5elM",
  authDomain: "airbnb-c061d.firebaseapp.com",
  projectId: "airbnb-c061d",
  storageBucket: "airbnb-c061d.appspot.com",
  messagingSenderId: "178727060980",
  appId: "1:178727060980:web:0d8a03443b035a5535a5a1",
  measurementId: "G-177NZYJN3D",
});

const db = firebaseApp.firestore();

export default db;
