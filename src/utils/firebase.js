import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAD7LM5Nuc9D1VhPN3G2Bmpu1J1Y_6BUeg",
    authDomain: "beginners-hackason.firebaseapp.com",
    projectId: "beginners-hackason",
    storageBucket: "beginners-hackason.firebasestorage.app",
    messagingSenderId: "257436201248",
    appId: "1:257436201248:web:649299f125be07044de745",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db, firebaseConfig };
