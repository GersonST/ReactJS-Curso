import * as firebase from 'firebase'
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBXyaw6FQ9T9d55UoLE-KsB0qYGZ8ZDVu0",
  authDomain: "reactapp-cd45a.firebaseapp.com",
  projectId: "reactapp-cd45a",
  storageBucket: "reactapp-cd45a.appspot.com",
  messagingSenderId: "1073094948787",
  appId: "1:1073094948787:web:9eaccca7e4f1fd4704bdc6",
  measurementId: "G-M9H70FCVLT"
};


export default !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig).firestore()
  : firebase.app().firestore();