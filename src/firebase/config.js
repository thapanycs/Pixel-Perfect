import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZ40r-Dv_QPZNABjxOg3RDx5mzKyb6pM4",
    authDomain: "pixel-perfect-be503.firebaseapp.com",
    projectId: "pixel-perfect-be503",
    storageBucket: "pixel-perfect-be503.appspot.com",
    messagingSenderId: "386804960121",
    appId: "1:386804960121:web:7646aa549010d12c683da8"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export {projectStorage, projectFirestore};