// Import the functions you need from the SDKs you need


{/*}
import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
*/}

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5NdP9u1vI3ipz_maUhU9ujKfZhvPI3SY",
  authDomain: "fir-one-6864a.firebaseapp.com",
  projectId: "fir-one-6864a",
  storageBucket: "fir-one-6864a.appspot.com",
  messagingSenderId: "320754199154",
  appId: "1:320754199154:web:a8f0c76d55cb5f7badb0eb",
  measurementId: "G-SVRFJBK0SS"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
//how how how how how how how how hwo hwo hwo hwo how hwo h wo hwoh wo