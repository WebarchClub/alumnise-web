import firebase from "firebase/app";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyDTEkjOJTAE6hmrxsKuA2oJbaHWuIvf_wI",
    authDomain: "webarch-db1c1.firebaseapp.com",
    databaseURL: "https://webarch-db1c1.firebaseio.com",
    projectId: "webarch-db1c1",
    storageBucket: "webarch-db1c1.appspot.com",
    messagingSenderId: "309696302063",
    appId: "1:309696302063:web:f35274a8f5d9f3f5f1041a",
};
// Initialize Firebase
firebase.initializeApp(config);
const db = firebase.firestore();

export default firebase;
