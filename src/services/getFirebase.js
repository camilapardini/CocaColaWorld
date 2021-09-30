import firebase from "firebase"
import "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyCe7GlhPjA6_00OWoqskvIRay4tiIhrLKE",
    authDomain: "coca-cola-world.firebaseapp.com",
    projectId: "coca-cola-world",
    storageBucket: "coca-cola-world.appspot.com",
    messagingSenderId: "675760282852",
    appId: "1:675760282852:web:fccc3dee75efc7811da0f1"
};

const app = firebase.initializeApp(firebaseConfig)


export function getFirestore () {
    
    return firebase.firestore(app)
}