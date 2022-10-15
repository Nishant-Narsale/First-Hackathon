import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCND06FIs8Zjq9IrYlMWL6eHk63X2eRzvU",
    authDomain: "chat-6a710.firebaseapp.com",
    projectId: "chat-6a710",
    storageBucket: "chat-6a710.appspot.com",
    messagingSenderId: "780034654964",
    appId: "1:780034654964:web:cf7580b3d6dc98b11794a1"
})

const db = firebaseApp.firestore()

const auth = firebaseApp.auth()

export { auth, db };