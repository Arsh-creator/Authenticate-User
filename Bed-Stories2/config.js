import * as firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyALLw6_c1DANYW1gzWBzydB7sc3zunJSPM",
    authDomain: "my-school-227d1.firebaseapp.com",
    databaseURL: "https://my-school-227d1-default-rtdb.firebaseio.com",
    projectId: "my-school-227d1",
    storageBucket: "my-school-227d1.appspot.com",
    messagingSenderId: "178041313254",
    appId: "1:178041313254:web:3be7864f9ce2b7ca8b2827"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();