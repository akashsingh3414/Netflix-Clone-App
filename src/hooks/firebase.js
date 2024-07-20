// hooks/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxJ8WCtSm9DUoD9ZSGRrH8jD3xFovoHRE",
  authDomain: "netflix-clone-project-9202e.firebaseapp.com",
  projectId: "netflix-clone-project-9202e",
  storageBucket: "netflix-clone-project-9202e.appspot.com",
  messagingSenderId: "1030200783136",
  appId: "1:1030200783136:web:3f93f0e3ae930e84bb2745"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
export default db;
