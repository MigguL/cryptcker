import firebase from "firebase";
import firebaseCredits from "./fireCredits";

const fire = firebase.initializeApp(firebaseCredits);

export default fire;
