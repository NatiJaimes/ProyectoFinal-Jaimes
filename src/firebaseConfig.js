import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOM,
  projectId: import.meta.env.VITE_PROY_ID,
  storageBucket: import.meta.env.VITE_STOR_BUCK,
  messagingSenderId: import.meta.env.VITE_MESS_SEND_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
