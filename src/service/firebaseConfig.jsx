// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARd1AhOWcjsJdGBjQd32gixxkULvQBZ_o",
  authDomain: "ai-trip-planner-36ef4.firebaseapp.com",
  projectId: "ai-trip-planner-36ef4",
  storageBucket: "ai-trip-planner-36ef4.firebasestorage.app",
  messagingSenderId: "828282491129",
  appId: "1:828282491129:web:63e8f3d8785506b680d228",
  measurementId: "G-GT2G0D25XC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
//const analytics = getAnalytics(app);