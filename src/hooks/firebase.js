import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "yourAPIkey",
  authDomain: "yourAuthDOmain",
  projectId: "yourProjectID",
  storageBucket: "yourStorageBucket",
  messagingSenderId: "yourSenderID",
  appId: "yourAppID"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
export default db;
