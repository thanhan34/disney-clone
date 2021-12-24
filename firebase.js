// Import the functions you need from the SDKs you need

import { initializeApp, getApps, getApp } from "firebase/app";
// import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCO9vhOV_AaibAE3eLyREAwXhSlHg2q7ns",
    authDomain: "disney-clone-de91e.firebaseapp.com",
    projectId: "disney-clone-de91e",
    storageBucket: "disney-clone-de91e.appspot.com",
    messagingSenderId: "576827276201",
    appId: "1:576827276201:web:4bfe08ae94bc68171562b8"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
// const storage = getStorage()
export { db }