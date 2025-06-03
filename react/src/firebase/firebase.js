import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAyqvNiAHGxF6uDI-4FAh2YKhv5NQsjII",
  authDomain: "fe-project-89788.firebaseapp.com",
  projectId: "fe-project-89788",
  storageBucket: "fe-project-89788.appspot.com",
  messagingSenderId: "509451195807",
  appId: "1:509451195807:web:26427132c193c47fe319aa",
  measurementId: "G-LX6PJYTSVD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
