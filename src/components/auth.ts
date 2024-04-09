import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA1FY2aIMp_nWID6EaUEH8qz6KP687_LiY",
    authDomain: "nettverksguiden.firebaseapp.com",
    databaseURL: "https://nettverksguiden-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "nettverksguiden",
    storageBucket: "nettverksguiden.appspot.com",
    messagingSenderId: "963938555326",
    appId: "1:963938555326:web:0fa5b67fc997b2b8e995ef",
    measurementId: "G-MTB0B5J3QQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };