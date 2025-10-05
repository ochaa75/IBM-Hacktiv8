// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAez0uUH_z0ZmNlBVQ8FBvPuhSGeryTfhY",
//   authDomain: "ocha-ask.firebaseapp.com",
//   projectId: "ocha-ask",
//   storageBucket: "ocha-ask.firebasestorage.app",
//   messagingSenderId: "377413252023",
//   appId: "1:377413252023:web:b121a7d6f799d429602e32",
//   measurementId: "G-3QSZQQNZXZ"
// };

// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);

// config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";  // tambahkan ini

const firebaseConfig = {
  apiKey: "AIzaSyAez0uUH_z0ZmNlBVQ8FBvPuhSGeryTfhY",
  authDomain: "ocha-ask.firebaseapp.com",
  projectId: "ocha-ask",
  storageBucket: "ocha-ask.firebasestorage.app",
  messagingSenderId: "377413252023",
  appId: "1:377413252023:web:b121a7d6f799d429602e32",
  measurementId: "G-3QSZQQNZXZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);  // tambahkan ini

export { db, storage };  // jangan lupa export storage juga
