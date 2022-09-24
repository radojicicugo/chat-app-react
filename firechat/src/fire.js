import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyC6OeAFwq404LEx8OqZDpKTM0GTJHDV4mY",
  authDomain: "firechat-e5a54.firebaseapp.com",
  projectId: "firechat-e5a54",
  storageBucket: "firechat-e5a54.appspot.com",
  messagingSenderId: "864178431591",
  appId: "1:864178431591:web:f59890377ecd9572c356c2",
  measurementId: "G-KBDPT6WMR2"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const storage = firebase.storage();

  const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

  
export { storage, db, auth, fire as default }
