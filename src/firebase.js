import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBOmVis_TuPVn0rX6xMXNRQ-xJc1YnPjP0",
  authDomain: "movie-stream-20a3b.firebaseapp.com",
  projectId: "movie-stream-20a3b",
  storageBucket: "movie-stream-20a3b.appspot.com",
  messagingSenderId: "50094668669",
  appId: "1:50094668669:web:75f900f70ebb8766bd6a14"
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;