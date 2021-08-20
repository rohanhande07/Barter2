import firebase from 'firebase'
require ('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBolMLi9_NIpmk7j7uUKW47FjdstKChmTs",
    authDomain: "barter-f12d2.firebaseapp.com",
    projectId: "barter-f12d2",
    storageBucket: "barter-f12d2.appspot.com",
    messagingSenderId: "373484215370",
    appId: "1:373484215370:web:b26247245f3b37ee92dab3",
    measurementId: "G-7WW1B0Q5PW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.firestore()