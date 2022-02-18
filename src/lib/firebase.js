import firebase from "firebase/compat"

const firebaseConfig = {
    apiKey: "AIzaSyAUGgEtiUa43xvvfPPx12Buahl-9USopc8",
    authDomain: "netflix-db140.firebaseapp.com",
    projectId: "netflix-db140",
    storageBucket: "netflix-db140.appspot.com",
    messagingSenderId: "854882318161",
    appId: "1:854882318161:web:b7310bc29593ef086b4570"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default db