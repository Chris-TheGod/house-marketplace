import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyAR0db5BuN_mR21DWQMYPyeEd82Y56-Va0",
  authDomain: "house-marketplace-app-a0d55.firebaseapp.com",
  projectId: "house-marketplace-app-a0d55",
  storageBucket: "house-marketplace-app-a0d55.appspot.com",
  messagingSenderId: "82635827489",
  appId: "1:82635827489:web:3134e7fb3ab355c0c3b660",
};
initializeApp(firebaseConfig);
export const db = getFirestore();
