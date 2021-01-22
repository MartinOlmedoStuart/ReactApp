import firebase from "firebase/app";
import "@firebase/firestore";

const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyCoMaSMxGZVY1a4kmEJucvcNnT9lqEYSSg",
        authDomain: "e-commerce-a3c0c.firebaseapp.com",
        projectId: "e-commerce-a3c0c",
        storageBucket: "e-commerce-a3c0c.appspot.com",
        messagingSenderId: "1063301261295",
        appId: "1:1063301261295:web:34072f51b645dab150f81a"
    });


  export function getFirebase() {
      return app;
  }

  export function getFirestore(){
    return firebase.firestore(app);
  }