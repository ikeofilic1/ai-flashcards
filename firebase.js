import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBM_mgIkiBzPl9NLg7FgeMsZBLIaE1TFd8",
    authDomain: "flashcard-saas-81476.firebaseapp.com",
    projectId: "flashcard-saas-81476",
    storageBucket: "flashcard-saas-81476.appspot.com",
    messagingSenderId: "1026640724822",
    appId: "1:1026640724822:web:bd3d45f1d341b43af98cf7",
    measurementId: "G-68D0XVXEM6"
};
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;