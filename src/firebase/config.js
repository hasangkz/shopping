import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'your_key',
  authDomain: 'react-aa5f9.firebaseapp.com',
  projectId: 'react-aa5f9',
  storageBucket: 'react-aa5f9.appspot.com',
  messagingSenderId: 'sender_id',
  appId: 'your_api_id',
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();
export { db, auth };
