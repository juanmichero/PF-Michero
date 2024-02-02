import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
  // apiKey: "AIzaSyBDn7LxzAcjF95ATQNGLGEjpXuJNAjwi2g",
  // authDomain: "pf-ecommerce-michero.firebaseapp.com",
  // projectId: "pf-ecommerce-michero",
  // storageBucket: "pf-ecommerce-michero.appspot.com",
  // messagingSenderId: "568951463809",
  // appId: "1:568951463809:web:2d85241be132e44a589280"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)