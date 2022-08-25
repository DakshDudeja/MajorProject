import firebase from "firebase/app"
import "firebase/storage"

const firebaseConfig = {

    apiKey: "AIzaSyA4TQJwpYlqiiyaJG8tTb7v1NorUCzT7uw",
  
    authDomain: "sih-final-1975e.firebaseapp.com",
  
    projectId: "sih-final-1975e",
  
    storageBucket: "sih-final-1975e.appspot.com",
  
    messagingSenderId: "1054396355437",
  
    appId: "1:1054396355437:web:8992bdfe7b82b59c540064",
  
    measurementId: "G-K633JKNYM6"
  
  };
  


  firebase.initializeApp(firebaseConfig)

  const storage=firebase.storage();

  export {storage,firebase as default}