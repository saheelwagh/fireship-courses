import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBpMKTWnPg1QjWm7siH1Bh1CXSSoIUkhV0",
    authDomain: "fireship-course-f4d07.firebaseapp.com",
    projectId: "fireship-course-f4d07",
    storageBucket: "fireship-course-f4d07.appspot.com",
    messagingSenderId: "1016396338653",
    appId: "1:1016396338653:web:ba4ad0f320410c35069234"
}

if(!firebase.apps.length) {
    // look up initialise app in docs
    firebase.initializeApp(firebaseConfig) 
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()