import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAnalytics } from "firebase/analytics";
//const secondaryServiceAccount = require('./path/to/serviceAccountKey.json');

// All required options are specified by the service account,

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const secondaryAppConfig = {
    apiKey: "",
    authDomain: "municipal-5014a.firebaseapp.com",
    projectId: "municipal-5014a",
    storageBucket: "municipal-5014a.appspot.com",
    messagingSenderId: "1021623386589",
    appId: "1:1021623386589:web:431affde6e1032e5fff634",
    measurementId: "G-YXWCE29RB4"
};

// Initialize Firebase
const secondary = initializeApp(secondaryAppConfig, 'secondary');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBqEnZY_PC6ublww9N_ZnDydRfeGw_ytAM",
    authDomain: "userwaste-ba4ec.firebaseapp.com",
    projectId: "userwaste-ba4ec",
    storageBucket: "userwaste-ba4ec.appspot.com",
    messagingSenderId: "97864618273",
    appId: "1:97864618273:web:1a41563f9a02f652302e60",
    measurementId: "G-JVJS28MD2G"
};

// Initialize Firebase
let app;
app = firebase.initializeApp(firebaseConfig);
export default app;
const auth = firebase.auth();
export { auth };
const analytics = getAnalytics(app);
