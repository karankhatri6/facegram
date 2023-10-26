import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBMn2ryAx_LHqklZDxjaSOnZvKt4-Kibyw",
  authDomain: "facegram-64687.firebaseapp.com",
  projectId: "facegram-64687",
  storageBucket: "facegram-64687.appspot.com",
  messagingSenderId: "270333970918",
  appId: "1:270333970918:web:94daedaa7e41e5b6146e27"
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()

export {projectStorage, projectFirestore}