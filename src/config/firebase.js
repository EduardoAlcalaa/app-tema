import { initializeApp } from "firebase/app"; 
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";

const firebaseConfig = { 
    apiKey: "AIzaSyB3xbvjr9FjqN1mhXfufELwu0gfyKBe4Q4",
     authDomain: "testefausto2024.firebaseapp.com", 
     projectId: "testefausto2024", 
     storageBucket: "testefausto2024.appspot.com", 
     messagingSenderId: "178545696820",
      appId: "1:178545696820:web:e67947c6c628465b75aa61",
     };

    const app = initializeApp(firebaseConfig);
     export const auth = getAuth(app); 
     export const db = getFirestore(app);



     //0DEbsalzpTHmQbcMD5mz7wOgEZ3gI-AGKl1LemxaoN3vdhDy
     