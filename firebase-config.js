import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB5WKVBO-qsRb5m5oVbe72aXeiC5xkorng",
  authDomain: "intervalo-musical-dca95.firebaseapp.com",
  projectId: "intervalo-musical-dca95",
  storageBucket: "intervalo-musical-dca95.firebasestorage.app",
  messagingSenderId: "61838736249",
  appId: "1:61838736249:web:198d30e1e56fcecd118da8",
  measurementId: "G-PE857GM66Z"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
