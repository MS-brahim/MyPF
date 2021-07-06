import  firebase from 'firebase';
import '@firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAkNgSbd1LD_vhmiCa3EJl9ORrlTtYSke0",
    authDomain: "cryptocoin-a7e0c.firebaseapp.com",
    projectId: "cryptocoin-a7e0c",
    storageBucket: "cryptocoin-a7e0c.appspot.com",
    messagingSenderId: "15174365365",
    appId: "1:15174365365:web:058258e1fff3f617b34efc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export default firebase;