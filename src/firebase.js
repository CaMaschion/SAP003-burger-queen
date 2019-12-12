import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBN8eRUtF5v5dUqLoMx-m7BHx3Vxg5Z_hw",
    authDomain: "burger-queen-81bd9.firebaseapp.com",
    databaseURL: "https://burger-queen-81bd9.firebaseio.com",
    projectId: "burger-queen-81bd9",
    storageBucket: "burger-queen-81bd9.appspot.com",
    messagingSenderId: "128824535292",
    appId: "1:128824535292:web:ababf130cf88dc71c8cf79",
    measurementId: "G-XN4R4GMGXZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase
