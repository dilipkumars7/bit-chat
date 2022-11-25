import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRe5Hr2YxEpRElA3GV4FCJYFr_hAgkoT0",
  authDomain: "bitsathy-chat.firebaseapp.com",
  projectId: "bitsathy-chat",
  storageBucket: "bitsathy-chat.appspot.com",
  messagingSenderId: "143579410344",
  appId: "1:143579410344:web:62389d4e433b4631d8379d",
  measurementId: "G-6ZZ3RP239L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth,provider };
export default db;