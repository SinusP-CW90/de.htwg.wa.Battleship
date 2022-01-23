import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA2Nit-3eD3AzhKIuMaXUXD4CkB6hMupM",
  authDomain: "battleship-wa-auth.firebaseapp.com",
  projectId: "battleship-wa-auth",
  storageBucket: "battleship-wa-auth.appspot.com",
  messagingSenderId: "24443203551",
  appId: "1:24443203551:web:a9acf6ff6e519632135e6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth};
