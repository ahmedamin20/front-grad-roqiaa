import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqmXpCxb2-BHnZmEPXGeWA3okT_i1ItSI",
  authDomain: "graduation2-fb874.firebaseapp.com",
  projectId: "graduation2-fb874",
  storageBucket: "graduation2-fb874.appspot.com",
  messagingSenderId: "33103850184",
  appId: "1:33103850184:web:5de451f9bd3b9f85c9d3fd",
  measurementId: "G-J126KFNYPQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
