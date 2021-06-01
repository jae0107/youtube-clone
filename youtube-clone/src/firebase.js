import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDiBVyirneJcfXezsOxjHxNXyMAIwjl0iI",
    authDomain: "clone-bcd17.firebaseapp.com",
    projectId: "clone-bcd17",
    storageBucket: "clone-bcd17.appspot.com",
    messagingSenderId: "757250658499",
    appId: "1:757250658499:web:6052e6c932431dbbe05276"
};

firebase.initializeApp(firebaseConfig)

export default firebase.auth()