import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAMx8VsDC4IZs70vJob_X42iUOcNfGLYLc",
    authDomain: "property24-mock-app.firebaseapp.com",
    databaseURL: "https://property24-mock-app.firebaseio.com",
    projectId: "property24-mock-app",
    storageBucket: "property24-mock-app.appspot.com",
    messagingSenderId: "961186933306",
    appId: "1:961186933306:web:0f891c68fb4d35c0152303",
    measurementId: "G-20Z3RVZN7R"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  // Initialize firestore / so that the console doesn't complain about 'the update'
  //firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase;