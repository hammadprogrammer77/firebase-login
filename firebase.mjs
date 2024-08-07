
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDY3zwoBy9HfpsugbaS8BJbE4c-wf5BAl4",
    authDomain: "batch-11-3191d.firebaseapp.com",
    projectId: "batch-11-3191d",
    storageBucket: "batch-11-3191d.appspot.com",
    messagingSenderId: "1087219169012",
    appId: "1:1087219169012:web:5b0babdb382fa5bddb90a1",
    measurementId: "G-P1PS3T51ZB"
  };

  // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);



  console.log(app);
  console.log(auth);
  
  