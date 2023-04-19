import firebase from 'firebase';

// adicione SDK do Firebase

var firebaseConfig = { 
  apiKey: "AIzaSyAANo0RTdJDCp2-Zag9_8Nn9gopeJjwDmY",
  authDomain: "projeto-67-861ba.firebaseapp.com",
  projectId: "projeto-67-861ba",
  storageBucket: "projeto-67-861ba.appspot.com",
  messagingSenderId: "681828954580",
  appId: "1:681828954580:web:6e3f49e2ac26e049fde641",
  measurementId: "G-C1XHBM6NBS"
};

// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();