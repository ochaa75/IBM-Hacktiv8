import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";  

const firebaseConfig = {
  apiKey: "xxxxxx",
  authDomain: "ocha-ask.firebaseapp.com",
  projectId: "ocha-ask",
  storageBucket: "ocha-ask.firebasestorage.app",
  messagingSenderId: "xxxxxxxxxx",
  appId: "xxxxxxxxxxxxxxxxx",
  measurementId: "xxxxxxxxxxxxxxxxxx"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);  

export { db, storage };  
