import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyC_U1T3Pwys1JraiDc9RSptvwpAxH61Ui0",
  authDomain: "hackathon-8c929.firebaseapp.com",
  projectId: "hackathon-8c929",
  storageBucket: "hackathon-8c929.appspot.com",
  messagingSenderId: "309228935836",
  appId: "1:309228935836:web:ca0184573d199a280aeb59",
  measurementId: "G-2FMSL8JDWD"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
} else {
    firebase.app();
}

let db = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const login = async () => {
    const res = await firebase.auth().signInWithPopup(provider)
    return res.user
}

export const logout = async () => {
    await firebase.auth().signOut()
}

export {db}