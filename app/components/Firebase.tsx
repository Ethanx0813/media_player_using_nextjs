// Import the functions you need from the SDKs you need
import { initializeApp, getApps} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNPZ5KiGZF24yvwrW2QHbgyxtSbkksQCg",
  authDomain: "clone-mediaplayer.firebaseapp.com",
  projectId: "clone-mediaplayer",
  storageBucket: "clone-mediaplayer.appspot.com",
  messagingSenderId: "287998295272",
  appId: "1:287998295272:web:d00a406aba6ecc30b81d5d"
};

// Initialize Firebase
let firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebaseApp;