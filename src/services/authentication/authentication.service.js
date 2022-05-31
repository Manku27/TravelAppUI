import * as firebase from "firebase";

export const loginRequest = (email, password) =>
  // TODO :  pick protocol, preferably phone
  firebase.auth().signInWithEmailAndPassword(email, password);
