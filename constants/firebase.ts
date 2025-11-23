import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyC5hJTdPGSX5MxP3Vq_N0Ps9gZ2K5RfWlY",
  authDomain: "nfl-reactnative.firebaseapp.com",
  projectId: "nfl-reactnative",
  storageBucket: "nfl-reactnative.appspot.com",
  messagingSenderId: "607607389256",
  databaseURL: "https://nfl-reactnative-default-rtdb.firebaseio.com",
  appId: "1:607607389256:web:1c1e1f2e3b4f5a6g7h8i"
};

// Initialize Firebase only once
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
