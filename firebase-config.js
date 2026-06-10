import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA-D3SaEiMzTS17ElI7BBYo_R9SlHedd1I",
  authDomain: "intervalo-musical.firebaseapp.com",
  projectId: "intervalo-musical",
  storageBucket: "intervalo-musical.firebasestorage.app",
  messagingSenderId: "421542064165",
  appId: "1:421542064165:web:b66bf05338dff19df24fcc",
  measurementId: "G-NGLJPMMBH3"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
