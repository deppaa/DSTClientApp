import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDXVUiLLFqP17WUjbKc_1cjd3_PZaDeuHI",
    authDomain: "dstchat-bd4b1.firebaseapp.com",
    databaseURL: "https://dstchat-bd4b1.firebaseio.com",
    projectId: "dstchat-bd4b1",
    storageBucket: "dstchat-bd4b1.appspot.com",
    messagingSenderId: "906693859178",
    appId: "1:906693859178:web:8b7d032077191dbe38b713",
};

firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase