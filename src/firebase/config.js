import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBMn2ryAx_LHqklZDxjaSOnZvKt4-Kibyw",
  authDomain: "facegram-64687.firebaseapp.com",
  projectId: "facegram-64687",
  storageBucket: "facegram-64687.appspot.com",
  messagingSenderId: "270333970918",
  appId: "1:270333970918:web:94daedaa7e41e5b6146e27"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const projectStorage = firebaseApp.storage();
const projectFirestore = firebaseApp.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp}