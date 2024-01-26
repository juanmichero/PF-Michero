import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBDn7LxzAcjF95ATQNGLGEjpXuJNAjwi2g",
  authDomain: "pf-ecommerce-michero.firebaseapp.com",
  projectId: "pf-ecommerce-michero",
  storageBucket: "pf-ecommerce-michero.appspot.com",
  messagingSenderId: "568951463809",
  appId: "1:568951463809:web:2d85241be132e44a589280"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)