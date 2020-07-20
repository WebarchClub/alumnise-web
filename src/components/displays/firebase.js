import firebase from "firebase/app";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyBdSOgIVa1hwO5kJs82d54VFFnyk4y292g",
    authDomain: "alumnise-srm.firebaseapp.com",
    databaseURL: "https://alumnise-srm.firebaseio.com",
    projectId: "alumnise-srm",
    storageBucket: "alumnise-srm.appspot.com",
    messagingSenderId: "638402156441",
    appId: "1:638402156441:web:3a11d07ad712f56d93e508",
    measurementId: "G-MZ9VVHFDKX"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
