import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';


let firebaseConfig = {
    apiKey: "AIzaSyDsf1swRU3hj1uVvVitetLs66QlVT9NiKg",
    authDomain: "portfolio-c88fe.firebaseapp.com",
    databaseURL: "https://portfolio-c88fe-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "portfolio-c88fe",
    storageBucket: "portfolio-c88fe.appspot.com",
    messagingSenderId: "615315006701",
    appId: "1:615315006701:web:5bc69481cf300fe9b918e4",
    measurementId: "G-KNLCHYBJNP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let storage = firebase.storage();


export {firebase, db, storage};