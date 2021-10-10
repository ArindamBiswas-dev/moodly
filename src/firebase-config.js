import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDvF11P1jMnco0RCgUc1DoJ6wVeLQNGNME',
  authDomain: 'moodly-f998d.firebaseapp.com',
  projectId: 'moodly-f998d',
  storageBucket: 'moodly-f998d.appspot.com',
  messagingSenderId: '915605707573',
  appId: '1:915605707573:web:7a1e6d5d4adedc5bb68a7c',
  measurementId: 'G-GJ86WE55W3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
