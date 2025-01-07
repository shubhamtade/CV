// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDjSOsE3qcnS63w2NSI14oQPfa4ZjX_QQY",
  authDomain: "fullfirebase-a9b69.firebaseapp.com",
  databaseURL: "https://fullfirebase-a9b69-default-rtdb.firebaseio.com",
  projectId: "fullfirebase-a9b69",
  storageBucket: "fullfirebase-a9b69.firebasestorage.app",
  messagingSenderId: "87241166717",
  appId: "1:87241166717:web:4a994153178d9fc4170614",
  measurementId: "G-NTL0WBZHSX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
