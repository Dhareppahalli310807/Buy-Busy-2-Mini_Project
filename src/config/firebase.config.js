// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1BmIdOogeIx_QYbathTl3Eqn11uX2t68",
  authDomain: "buybusy-2-mini-project.firebaseapp.com",
  projectId: "buybusy-2-mini-project",
  storageBucket: "buybusy-2-mini-project.appspot.com",
  messagingSenderId: "614332613472",
  appId: "1:614332613472:web:65813e5ea80958dfac9405",
  measurementId: "G-XRZQQY8R34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
