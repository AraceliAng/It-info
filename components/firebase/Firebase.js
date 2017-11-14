import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDzgZapMUPFkg6dlte4W3au-E0zHR7Vp50",
    authDomain: "test-4341e.firebaseapp.com",
    databaseURL: "https://test-4341e.firebaseio.com",
    projectId: "test-4341e",
    storageBucket: "test-4341e.appspot.com",
    messagingSenderId: "301332539094"
};
firebase.initializeApp(config);
export const firebaseAuth = firebase.auth()
export default firebase;
