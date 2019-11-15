import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
   
        apiKey: "AIzaSyAtd9GhiTzQArhcW7sQXY3F1-tKF4GIg84",
        authDomain: "mzkays-empire.firebaseapp.com",
        databaseURL: "https://mzkays-empire.firebaseio.com",
        projectId: "mzkays-empire",
        storageBucket: "mzkays-empire.appspot.com",
        messagingSenderId: "923663903187",
        appId: "1:923663903187:web:f147011c83127cb189e726",
        measurementId: "G-RSRV7FRJ2W"
};
      
firebase.initializeApp(config); 

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
