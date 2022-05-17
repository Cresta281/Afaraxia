import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANSzrfdCBN6N0b5Vb6uQsMuyfAdbR5N5U",
  authDomain: "afaxia-react.firebaseapp.com",
  projectId: "afaxia-react",
  storageBucket: "afaxia-react.appspot.com",
  messagingSenderId: "353635954072",
  appId: "1:353635954072:web:6725a94d75991054150fed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const Database = getFirestore(app)

export async function getProducts(Database) {
  const productsColl = collection(Database, 'ProductsData');
  const productsSnapshot = await getDocs(productsColl);
  const productsList = productsSnapshot.docs.map(doc => doc.data());
  return productsList;
}

