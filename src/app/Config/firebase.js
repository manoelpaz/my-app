import firebase from "firebase/app";
//import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0tfcKEN-VDvtVpcPFE6lbVzWxNDZqOuc",
    authDomain: "invenicrm.firebaseapp.com",
    projectId: "invenicrm",
    storageBucket: "invenicrm.appspot.com",
    messagingSenderId: "555877472268",
    appId: "1:555877472268:web:940226d1b45a7f73e0b629"
  };
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);