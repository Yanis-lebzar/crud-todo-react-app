import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBu7nXD9ZI_66da3ssvwAdYMDMDYzMFv1g",
  authDomain: "todo-app-6055a.firebaseapp.com",
  projectId: "todo-app-6055a",
  storageBucket: "todo-app-6055a.appspot.com",
  messagingSenderId: "617969900641",
  appId: "1:617969900641:web:6c732e52fc268fe3ec5e20",
  measurementId: "G-HRCM04623Q",
});

const db = firebaseApp.firestore();

export default db;
