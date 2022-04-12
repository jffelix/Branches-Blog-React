import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCU1clgItRtKSKjuK0nXwqiPTUxcR2cNVM",
    authDomain: "branches-blog-development.firebaseapp.com",
    projectId: "branches-blog-development",
    storageBucket: "branches-blog-development.appspot.com",
    messagingSenderId: "176445850049",
    appId: "1:176445850049:web:4e3a6dd2e591da606e6f40",
    measurementId: "G-89PVPF61YT"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();

export default app;