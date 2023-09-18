import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDyb-pNOdBv7rX7BcidogTuJcitXgSch5Q",
    authDomain: "react-firebase-auth-test-dd144.firebaseapp.com",
    projectId: "react-firebase-auth-test-dd144",
    storageBucket: "react-firebase-auth-test-dd144.appspot.com",
    messagingSenderId: "803421866129",
    appId: "1:803421866129:web:f6d42b0dfca799034f1730"
};

//   init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export  { projectFirestore, projectAuth, timestamp }

