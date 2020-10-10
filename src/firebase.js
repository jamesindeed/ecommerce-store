import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDPYxVfb9zkmlteT4MiBPPO2MIJVfMJIYc",
    authDomain: "ecommerce-store-b35d5.firebaseapp.com",
    databaseURL: "https://ecommerce-store-b35d5.firebaseio.com",
    projectId: "ecommerce-store-b35d5",
    storageBucket: "ecommerce-store-b35d5.appspot.com",
    messagingSenderId: "649313552246",
    appId: "1:649313552246:web:6d224dd8a7fd8bcb359c57",
    measurementId: "G-BPH3JZ07V7"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };