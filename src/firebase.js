// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtmR2gJ3ELdB3tlOSfTk1XyybOFvl-Ufw",
  authDomain: "cryptohack-07092022.firebaseapp.com",
  projectId: "cryptohack-07092022",
  storageBucket: "cryptohack-07092022.appspot.com",
  messagingSenderId: "322867807871",
  appId: "1:322867807871:web:a7713126a6d6f56222214a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
