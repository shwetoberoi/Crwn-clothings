import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCkGkmy711RRrcDfERH-I0JrFMn89t8qMc",
  authDomain: "crwn-db-e98d3.firebaseapp.com",
  databaseURL: "https://crwn-db-e98d3.firebaseio.com",
  projectId: "crwn-db-e98d3",
  storageBucket: "crwn-db-e98d3.appspot.com",
  messagingSenderId: "683390710360",
  appId: "1:683390710360:web:5dcce8a1092e1e66a3902d",
  measurementId: "G-Q38E671J78"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
