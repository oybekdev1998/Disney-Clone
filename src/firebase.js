import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyANNFwqCrxarq2nJs25wpVWPbSUo4zLLUM",
  authDomain: "disneyplus-clone-a0f01.firebaseapp.com",
  projectId: "disneyplus-clone-a0f01",
  storageBucket: "disneyplus-clone-a0f01.appspot.com",
  messagingSenderId: "657462093285",
  appId: "1:657462093285:web:0b0fe19e86ce82db5b7b0c",
  measurementId: "G-T5E103JVB7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.fireStore();
const auth = firebase.auth();
const provider = new firebase.auth.GooogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db;
