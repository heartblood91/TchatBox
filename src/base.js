import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";

// Modifier les valeurs en XXXX
const firebaseApp = firebase.initializeApp({
  apiKey: "XXXX",
  authDomain: "XXXX",
  databaseURL: "XXXX",
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp };

export default base;
