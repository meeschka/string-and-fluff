import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAEmWWxsW94lVt2Juistq4UnjqV8rpvXW0",
    authDomain: "string-and-fluff.firebaseapp.com",
    databaseURL: "https://string-and-fluff.firebaseio.com",
    projectId: "string-and-fluff",
    storageBucket: "string-and-fluff.appspot.com",
    messagingSenderId: "366589216759",
    appId: "1:366589216759:web:f4bf4110c4966f5b70d0f2",
    measurementId: "G-2QF76JLNF6"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase