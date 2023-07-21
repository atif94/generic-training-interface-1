import firebase from "firebase/compat/app";
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBUHKvwnNoMKZ7P6FlvxNuQ2pFAcuq2Rlc",
  authDomain: "generic-training-interface.firebaseapp.com",
  projectId: "generic-training-interface",
  storageBucket: "generic-training-interface.appspot.com",
  messagingSenderId: "1074624252125",
  appId: "1:1074624252125:web:859e46814b5056deb4b334"
};

// Initialize Firebase and Firebase Authentication
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;