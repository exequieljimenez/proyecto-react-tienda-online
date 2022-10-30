import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCfJ-hX0WZ9S1TMdHJy0cPiRsHUnPVkEdM",
  authDomain: "backend-app-react-1.firebaseapp.com",
  projectId: "backend-app-react-1",
  storageBucket: "backend-app-react-1.appspot.com",
  messagingSenderId: "305693876010",
  appId: "1:305693876010:web:352943d1a52e50dd3bc853"
};


const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app)