import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCtK1bxqpIS3uXjClOF1S8D3b5mdfWg_dg",
  authDomain: "urbannest-52e4c.firebaseapp.com",
  projectId: "urbannest-52e4c",
  storageBucket: "urbannest-52e4c.firebasestorage.app",
  messagingSenderId: "528522448937",
  appId: "1:528522448937:web:b2914d35a21717ad054c38",
  measurementId: "G-ZESE291QFY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);