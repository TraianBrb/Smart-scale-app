import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
