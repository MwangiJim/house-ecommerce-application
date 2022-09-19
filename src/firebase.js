import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAKk3p0zGEes4k0ar4RR5kFFllqCr-SVH0",
  authDomain: "airbnb-react-application-aaa6d.firebaseapp.com",
  projectId: "airbnb-react-application-aaa6d",
  storageBucket: "airbnb-react-application-aaa6d.appspot.com",
  messagingSenderId: "12915612988",
  appId: "1:12915612988:web:e45652d5c47739f6b21239",
  measurementId: "G-XQGN9Q9F5Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export {db}