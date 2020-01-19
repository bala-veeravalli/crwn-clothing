import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCbyrb6IanZgdtLAf7gH-wl9anetIwEaL4",
    authDomain: "crwn-db-72a56.firebaseapp.com",
    databaseURL: "https://crwn-db-72a56.firebaseio.com",
    projectId: "crwn-db-72a56",
    storageBucket: "crwn-db-72a56.appspot.com",
    messagingSenderId: "320894750579",
    appId: "1:320894750579:web:2252fe5556797a805ebf06"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;