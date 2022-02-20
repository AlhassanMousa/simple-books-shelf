import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhz2SQl0fQbtWIzP3aq5S5f-4MllyVX8w",
  authDomain: "xoshelf.firebaseapp.com",
  projectId: "xoshelf",
  storageBucket: "xoshelf.appspot.com",
  messagingSenderId: "821990135557",
  appId: "1:821990135557:web:a027051302472bd210096c",
  measurementId: "G-VEJ6L6H7C5",
};
export const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const auth = firebase.auth();

export default db;
