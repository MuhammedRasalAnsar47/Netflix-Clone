
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {

  apiKey: "AIzaSyB9tO2PtIqawyJ3itKxDBmjkFUfmxYB5v4",

  authDomain: "netflix-clone-7b8a1.firebaseapp.com",

  projectId: "netflix-clone-7b8a1",

  storageBucket: "netflix-clone-7b8a1.appspot.com",

  messagingSenderId: "865451150257",

  appId: "1:865451150257:web:891c0f54de8a0088668b90",

  measurementId: "G-751PCW5VE0"

};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)